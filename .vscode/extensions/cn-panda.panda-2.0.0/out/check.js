"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = void 0;
const VSCode = require("vscode");
const FS = require("fs");
const Path = require("path");
const xml2js = require("xml2js");
const axios = require("axios").default;
const FormData = require("form-data");
const BlueBird = require("bluebird");
const execAsync = BlueBird.promisify(require("child_process").exec);
const request_1 = require("./request");
const md5 = require("js-md5");
const execSync = require("child_process").execSync;
/** 输出控制台返回的值
 * @param utils 基础工具
 * @param data  数据
 * @param prefix 前缀
 */
function logWithPrefix(utils, data, prefix) {
    const lines = data.toString().split(/\r\n|\r|\n/);
    lines.forEach((l) => {
        if (l.length > 0) {
            utils.logToSonarLintOutput(`${prefix} ${l}`);
        }
    });
}
/** 解析xml转化后的json数据
 * @param data - 返回的数据
 */
function getCheckBuffer(data) {
    const resBuffer = [];
    const { GlobalyzerResults: { $: { clientVersion, basepath }, Scan = [], }, } = data;
    Scan.forEach((item) => {
        const { $: { ruleSetName, language }, ScanResults = [], } = item;
        ScanResults.forEach((value) => {
            const { $: { type, status }, result = [], } = value;
            if (status == "active") {
                result.forEach((item) => {
                    const { $: { file, linenum, startpos, endpos, reason }, issue, } = item;
                    resBuffer.push({
                        clientVersion,
                        basepath,
                        ruleSetName,
                        type,
                        file,
                        linenum,
                        startpos,
                        endpos,
                        reason: issue[0],
                        language,
                    });
                });
            }
        });
    });
    return resBuffer;
}
/** 展示解析的数据
 * @param utils 工具函数
 * @param path 扫描的文件路径
 * @param context 上下文
 * @param result 检查的解析后的结果
 */
function showCheck(utils, context, path, result) {
    const resBuffer = getCheckBuffer(result) || [];
    const collenctionBuffer = {};
    const scanBuffer = {};
    resBuffer.forEach((item) => {
        const { clientVersion = "", basepath = "", ruleSetName = "", type = "", file = "", linenum = "", startpos = "", endpos = "", reason = "", language, } = item;
        const patch = Path.join(basepath, file);
        if (!collenctionBuffer[patch]) {
            collenctionBuffer[patch] = [];
        }
        if (!scanBuffer[`${patch}`]) {
            scanBuffer[`${patch}`] = [];
        }
        scanBuffer[`${patch}`].push(item);
        const linenumTemp = linenum * 1 - 1;
        const startposTemp = startpos * 1;
        const endposTemp = endpos * 1;
        const server = VSCode.workspace.getConfiguration().get("mds.i18n.rule.server") || 1;
        collenctionBuffer[patch].push({
            range: new VSCode.Range(new VSCode.Position(linenumTemp, startposTemp), new VSCode.Position(linenumTemp, endposTemp)),
            message: reason,
            severity: server,
            code: `${ruleSetName}-${clientVersion}`,
            source: "Venus",
        });
    });
    // 存入解析结果, 把结果写入.panda/scan.json
    saveScanValue(utils, context, scanBuffer);
    Object.keys(collenctionBuffer).forEach((item) => {
        const value = collenctionBuffer[item];
        if (value) {
            const uri = VSCode.Uri.file(item);
            utils.collection.delete(uri);
            utils.collection.set(uri, value);
        }
    });
}
/** 存入解析结果
 * @param context 上下文呢
 * @param data 数据
 */
function saveScanValue(utils, context, data) {
    const workPath = utils.getWorkUrl(context);
    if (!workPath) {
        utils.showBarItem(`🔴初始化失败`);
    }
    // 先看有没有扫描后的文件
    let scanPath = Path.join(workPath, ".panda/scan.json");
    if (!FS.existsSync(scanPath)) {
        FS.writeFileSync(scanPath, "");
    }
    let canRes = {};
    // 这里不存上一次的扫描结果了，直接用新的
    // 后面改了，需要判断一下，又重复计算的问题，以及排序的问题
    // 存入解析结果，这里需要对解析结果和以前的数据做合并
    if (FS.existsSync(scanPath)) {
        let data = FS.readFileSync(scanPath, { encoding: "utf8" }) || "";
        if (data) {
            canRes = JSON.parse(data);
        }
    }
    Object.keys(data).forEach((path) => {
        // 直接赋值进去
        canRes[path] = {};
        data[path].forEach((element) => {
            const key = md5.hex(`${JSON.stringify(element)}`);
            canRes[path][key] = { ...element, key };
        });
        // // 如果没有这个路径，就直接赋值进去
        // if (!canRes[path]) {
        // 	canRes[path] = {};
        // 	data[path].forEach((element: mdsI18n.viewItem) => {
        // 		const key = md5.hex(`${JSON.stringify(element)}`);
        // 		canRes[path][key] = { ...element, key }
        // 	});
        // } else {
        // 	const scanData = data[path];
        // 	scanData.forEach((element: mdsI18n.viewItem) => {
        // 		const key = md5.hex(`${JSON.stringify(element)}`);
        // 		// 没有就添加
        // 		// 有的话 如果hex一样，有两种解释，一种是修改了，给撤销了，另一种是没有修复
        // 		// 两种都直接覆盖就好了
        // 		canRes[path][key] = { ...element, key };
        // 	});
        // }
    });
    if (FS.existsSync(scanPath)) {
        FS.writeFileSync(scanPath, JSON.stringify(canRes));
    }
}
/** 检查文件
 * @param checkArg 事件传入的参数
 * @param context 插件上下文
 * @param utils 初始化后的工具函数
 * @param isFile 是否是文档
 */
async function check(checkArg, context, utils, isFile = false) {
    const { extensionPath } = context;
    const { _fsPath: path } = checkArg;
    const venusConfigurations = utils.getVenusConfigration();
    let { tenentID, fileExclusions, jsRuleName, htmlRuleName } = venusConfigurations;
    // jar 包位置
    const javaPath = Path.join(extensionPath, "server/i18n-scanner-1.0.8.jar");
    // 扫描规则位置
    const rulePatch = Path.join(extensionPath, "server", "rule", "LingoportProjectDefinition.xml");
    const jsRulePath = Path.join(extensionPath, "server", "rule", "javascript-rule.xml");
    const htmlRulePath = Path.join(extensionPath, "server", "rule", "html-rule.xml");
    // 输出规则的位置
    const workPath = utils.getWorkUrl(context);
    //group and project name
    let projectAndGroupPath = utils.getProjectAndGroupName(workPath);
    let projectName = `${projectAndGroupPath.groupName}.${projectAndGroupPath.projectName}`;
    const outPatch = Path.join(extensionPath, "checkres");
    // 输出的文件地址
    const lingoRes = Path.join(outPatch, `${projectAndGroupPath.groupName}.${projectAndGroupPath.projectName}_javascript.xml`);
    const lingoResByHtml = Path.join(outPatch, `${projectAndGroupPath.groupName}.${projectAndGroupPath.projectName}_html.xml`);
    let scanPath = Path.join(workPath, ".panda/scan.json");
    const reportPath = Path.join(extensionPath, "/checkres");
    const SCANNER_HOME = Path.join(extensionPath, "/venus");
    if (!path) {
        utils.logToSonarLintOutput("文件路径未获取到,请重新选中文件或文件夹扫描");
        utils.showBarItem(`🔴Panda 扫描文件路径未获取到，请重新选中文件或文件夹扫描`);
        return;
    }
    let checkPatch = Path.dirname(path);
    let relativePath = Path.relative(workPath, path);
    //获取文件过滤规则集
    if (!projectAndGroupPath) {
        return;
    }
    // java 扫描参数
    // 扫描后结果 xml 文件会被写入 chechres
    let properties = "";
    // 扫描的基本文件
    // 扫描的文件名
    let checkFile = "";
    if (!isFile) {
        checkFile = Path.basename(path);
        properties = `-Dproject.name=${projectName} -Dreport.path=${reportPath} -Dproject.path=${workPath} -Dexcluded.files=${fileExclusions} -Djs-ruleset.path=${jsRulePath} -Dhtml-ruleset.path=${htmlRulePath} -Dscan.items=${path}`;
    }
    else {
        checkPatch = path;
        properties = `-Dproject.name=${projectName} -Dreport.path=${reportPath} -Dproject.path=${workPath} -Dscan.items=${path} -Dexcluded.files=${fileExclusions} -Djs-ruleset.path=${jsRulePath} -Dhtml-ruleset.path=${htmlRulePath}`;
    }
    // const scanList: mdsI18n.checkRest[]  = [ ];
    // let data1 = FS.readFileSync(lingoRes, { encoding: 'utf8' }) || '';
    // let data2 = FS.readFileSync(lingoResByHtml, { encoding: 'utf8' }) || '';
    // xml2js.parseString(data1, function (err, result) {
    // 	scanList.push(result);
    // });
    // xml2js.parseString(data2, function (err, result) {
    // 	scanList.push(result);
    // });
    const scanList = [];
    // 清空上次扫描文件
    try {
        if (FS.existsSync(lingoRes)) {
            FS.unlinkSync(lingoRes);
            utils.showBarItem(`清空上次扫描文件-lingoRes:${lingoRes}`);
        }
        if (FS.existsSync(lingoResByHtml)) {
            FS.unlinkSync(lingoResByHtml);
            utils.showBarItem(`清空上次扫描文件-lingoResByHtml:${lingoRes}`);
        }
        if (FS.existsSync(scanPath)) {
            FS.unlinkSync(scanPath);
            utils.showBarItem(`清空上次扫描文件-scanPath:${lingoRes}`);
        }
    }
    catch { }
    const args = {
        "-jar": javaPath,
        // "-pp": checkPatch,
        // "-si": checkFile,
        // "-f": rulePatch,
        // "-rp": outPatch,
    };
    const javaArg = Object.entries(args).filter((item) => {
        const [command, value] = item;
        return value;
    });
    const execScan = async () => new Promise(async (resolve, reject) => {
        await execAsync(`java ${properties} -jar ${javaPath} `, {
            encoding: "utf8",
            maxBuffer: 5000 * 1024,
            cwd: null,
            env: null,
        })
            .then((data) => { })
            .catch((err) => {
            console.log("scan err", err);
            reject(err);
            utils.showBarItem(`🔴Panda 扫描失败`);
        });
        utils.showBarItem(`$(sync~spin)开始解析数据`);
        resolve();
    });
    utils.showBarItem(`$(sync~spin) Panda 扫描中......`);
    await execScan();
    // 扫描结果
    let scanResult = [];
    const jsScanResult = new Promise(async (resolve, reject) => {
        if (!FS.existsSync(lingoRes)) {
            resolve(false);
            return;
        }
        let param = new FormData();
        param.append("file", FS.createReadStream(lingoRes));
        param.append("type", "application/xml");
        let res = "";
        let err = "";
        let projectId = `${projectAndGroupPath.groupName}/${projectAndGroupPath.projectName}`;
        // todo:dan 这一步是做什么的 ？
        await axios({
            method: "post",
            url: `http://g11n-venus.alibaba-inc.com/issue/lp/enhance.json?projectId=${projectId}&async=false`,
            data: param,
            headers: param.getHeaders(),
        }).then((v) => {
            const { data: { content = "", code = "", message = "" } = {} } = v;
            if (code == 200) {
                res = content;
            }
            else {
                err = message;
            }
        }, (error) => {
            resolve(false);
        });
        if (err || (!err && !res)) {
            utils.showBarItem(`🔴javascript文件解析出错: ${err}`);
            resolve(false);
            return;
        }
        await axios({
            method: "get",
            url: res,
        })
            .then((value) => {
            const { status, data = "" } = value;
            if (status == 200) {
                res = data;
            }
        })
            .catch((err) => {
            utils.showBarItem(`🔴javascript文件解析出错: ${err}`);
        });
        xml2js.parseString(res, function (err, result) {
            scanList.push(result);
            resolve(true);
        });
    });
    scanResult.push(jsScanResult);
    const htmlScanResult = new Promise(async (resolve, reject) => {
        let param = new FormData();
        if (!FS.existsSync(lingoResByHtml)) {
            resolve(false);
            return;
        }
        param.append("file", FS.createReadStream(lingoResByHtml));
        param.append("type", "application/xml");
        let res = "";
        let err = "";
        let projectId = `${projectAndGroupPath.groupName}/${projectAndGroupPath.projectName}`;
        await axios({
            method: "post",
            url: `http://g11n-venus.alibaba-inc.com/issue/lp/enhance.json?projectId=${projectId}&async=false`,
            data: param,
            headers: param.getHeaders(),
        }).then((v) => {
            const { data: { content = "", code = "", message = "" } = {} } = v;
            if (code == 200) {
                res = content;
            }
            else {
                err = message;
            }
        }, (error) => {
            resolve(false);
        });
        if (err || (!err && !res)) {
            utils.showBarItem(`🔴html文件解析出错: ${err}`);
            resolve(false);
            return;
        }
        await axios({
            method: "get",
            url: res,
        })
            .then((value) => {
            const { status, data = "" } = value;
            if (status == 200) {
                res = data;
            }
        })
            .catch((err) => {
            resolve(false);
            utils.showBarItem(`🔴html文件解析出错: ${err}`);
        });
        xml2js.parseString(res, function (err, result) {
            scanList.push(result);
            resolve(true);
        });
    });
    scanResult.push(htmlScanResult);
    Promise.all(scanResult).then((result) => {
        const checkPath = context.workspaceState.get("checkPath") || "";
        if (!FS.existsSync(checkPath)) {
            FS.writeFileSync(checkPath, "");
        }
        if (FS.existsSync(checkPath)) {
            FS.writeFileSync(checkPath, JSON.stringify(scanList, null, 2));
        }
        scanList.forEach((item) => {
            // 在左侧 VENUS 面板展示解析的结果列表
            showCheck(utils, context, path, item);
        });
        utils.showBarItem("Panda 扫描完成，查看左侧 PANDA 面板发起修复");
        utils.logToSonarLintOutput("Panda 扫描完成");
        // 更新数据
        VSCode.commands.executeCommand("venus.refreshView");
        //插件扫描打点，用户统计PV/UV
        (0, request_1.venusPluginLog)();
    }, (error) => { });
}
exports.check = check;
//# sourceMappingURL=check.js.map