"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addKeyResultToData = exports.searcKeysFromTerm = exports.addExcludeFile = exports.getScanRule = exports.uploadFileDataToMedusa = exports.joinMcmsKeyAndAutoKeyToData = exports.searchResourceByValuesFromMedusa = exports.uploadFixedIssuedToVenus = exports.uploadExcludeFileConfiguration = exports.setVenusConfiguration = void 0;
const VSCode = require("vscode");
const utils_1 = require("./utils");
const Path = require("path");
const FS = require("fs");
const request_1 = require("./request");
const axios = require("axios").default;
const fileExcludeConfigName = "mds.i18n.rule.fileExclusions";
const BlueBird = require("bluebird");
const execAsync = BlueBird.promisify(require("child_process").exec);
/**
 * 将远端文件过滤规则拉到本地
 */
async function setVenusConfiguration(context) {
    const workPath = utils_1.default.getWorkUrl(context);
    //group and project name
    const gitInfo = utils_1.default.getProjectAndGroupName(workPath);
    const gitRepoUrl = `git@gitlab.alibaba-inc.com:${gitInfo.groupName}/${gitInfo.projectName}.git`;
    const rules = await (0, request_1.getAppRuleList)(gitRepoUrl);
    const localFilterRule = VSCode.workspace
        .getConfiguration()
        .get("mds.i18n.rule.fileExclusions");
    if (rules && rules.length) {
        const rulesList = rules.map((rule) => rule.ruleContent);
        let mergegRuleList = localFilterRule
            ? localFilterRule.concat(rulesList)
            : rulesList;
        mergegRuleList = [...new Set(mergegRuleList)];
        VSCode.workspace
            .getConfiguration()
            .update(fileExcludeConfigName, mergegRuleList, VSCode.ConfigurationTarget.Global);
        VSCode.workspace
            .getConfiguration()
            .update(fileExcludeConfigName, mergegRuleList);
    }
}
exports.setVenusConfiguration = setVenusConfiguration;
async function getScanRule(context) {
    const venusConfigurations = utils_1.default.getVenusConfigration();
    let { tenentID, fileExclusions, jsRuleName, htmlRuleName } = venusConfigurations;
    const { extensionPath } = context;
    const jsRulePath = Path.join(extensionPath, "server", "rule", "javascript-rule.xml");
    const htmlRulePath = Path.join(extensionPath, "server", "rule", "html-rule.xml");
    //清空上次规则集
    try {
        if (FS.existsSync(jsRulePath)) {
            FS.unlinkSync(jsRulePath);
        }
        if (FS.existsSync(htmlRulePath)) {
            FS.unlinkSync(htmlRulePath);
        }
    }
    catch (e) {
        console.log(e);
    }
    //获取TenantID
    //获取引擎规则集
    let ruleResArr = [];
    let jsResult = new Promise(async (resolve, reject) => {
        let jsRuleResultContent = await (0, request_1.getRuleResult)(jsRuleName || "");
        if (jsRuleResultContent) {
            let jsRuleDetailResult = await axios({
                method: "get",
                url: jsRuleResultContent,
            });
            if (jsRuleDetailResult && jsRuleDetailResult.status == 200) {
                if (!FS.existsSync(jsRulePath)) {
                    try {
                        FS.writeFileSync(jsRulePath, jsRuleDetailResult.data);
                    }
                    catch (error) {
                        utils_1.default.logToSonarLintOutput(`规则集写入${jsRulePath}失败`);
                        console.log(`规则集写入${jsRulePath}失败: `, error);
                    }
                }
                resolve(true);
            }
            else {
                utils_1.default.showBarItem(`获取javascript规则集失败`);
                resolve(false);
            }
        }
        else {
            utils_1.default.showBarItem(`获取javascript规则集失败`);
            resolve(false);
        }
    });
    ruleResArr.push(jsResult);
    let htmlResult = new Promise(async (resolve, reject) => {
        let htmlRuleResultContent = await (0, request_1.getRuleResult)(htmlRuleName || "");
        if (htmlRuleResultContent) {
            let htmlRuleDetailResult = await axios({
                method: "get",
                url: htmlRuleResultContent,
            });
            if (htmlRuleDetailResult && htmlRuleDetailResult.status == 200) {
                if (!FS.existsSync(htmlRulePath)) {
                    try {
                        FS.writeFileSync(htmlRulePath, htmlRuleDetailResult.data);
                    }
                    catch (error) {
                        utils_1.default.logToSonarLintOutput(`规则集写入${htmlRulePath}失败`);
                    }
                }
                resolve(true);
            }
            else {
                utils_1.default.showBarItem(`获取html规则集失败`);
                resolve(false);
            }
        }
        else {
            utils_1.default.showBarItem(`获取html规则集失败`);
            resolve(false);
        }
    });
    ruleResArr.push(htmlResult);
    return Promise.all(ruleResArr);
}
exports.getScanRule = getScanRule;
/**
 * 上传过滤文件规则到远端
 * @param context
 */
async function uploadExcludeFileConfiguration(context) {
    const workPath = utils_1.default.getWorkUrl(context);
    //group and project name
    const gitInfo = utils_1.default.getProjectAndGroupName(workPath);
    const gitRepoUrl = `git@gitlab.alibaba-inc.com:${gitInfo.groupName}/${gitInfo.projectName}.git`;
    const rules = VSCode.workspace.getConfiguration().get(fileExcludeConfigName);
    const userId = VSCode.workspace
        .getConfiguration()
        .get("mds.i18n.user.accessKey");
    await (0, request_1.uploadExcludeFiles)({
        rules,
        repoUrl: gitRepoUrl,
        userId: userId || "",
    });
}
exports.uploadExcludeFileConfiguration = uploadExcludeFileConfiguration;
/**
 *
 * @param context
 * @param arg
 * @param isFolder 是否忽略文件夹
 * @returns
 */
async function addExcludeFile(context, arg, isFolder) {
    const workPath = utils_1.default.getWorkUrl(context);
    const gitInfo = utils_1.default.getProjectAndGroupName(workPath);
    const gitRepoUrl = `git@gitlab.alibaba-inc.com:${gitInfo.groupName}/${gitInfo.projectName}.git`;
    let rules = VSCode.workspace
        .getConfiguration()
        .get(fileExcludeConfigName);
    let ignoreFilePath = arg.path;
    if (!ignoreFilePath)
        return;
    let ignoreFileRelativePath = "/" + Path.relative(workPath, ignoreFilePath);
    if (isFolder) {
        ignoreFileRelativePath += "/**";
    }
    const userId = VSCode.workspace
        .getConfiguration()
        .get("mds.i18n.user.accessKey");
    if (rules.indexOf(ignoreFileRelativePath) == -1) {
        rules.push(ignoreFileRelativePath);
    }
    // VSCode.workspace.getConfiguration(fileExcludeConfigName, 1);
    VSCode.workspace
        .getConfiguration()
        .update(fileExcludeConfigName, rules, VSCode.ConfigurationTarget.Global);
    VSCode.workspace.getConfiguration().update(fileExcludeConfigName, rules);
}
exports.addExcludeFile = addExcludeFile;
/**
 * 插件用提交用户修复缺陷列表
 * @param data
 * {
    fcca8d2f71cd26b75b1e6348e0fbc6b8: {
      clientVersion: "1.0.0",
      basepath: "/Users/zhsi/Documents/projects/react-multi/src/pages",
      ruleSetName: "javascript-rule",
      type: "Embedded Strings",
      file: "languages/index.jsx",
      linenum: "108",
      startpos: "22",
      endpos: "33",
      reason: "`已选择${num}`",
      language: "javascript",
      key: "fcca8d2f71cd26b75b1e6348e0fbc6b8",
      mdsKey: "gcn-templates_react-multi_src.pages.languages.index_${num}.Selected",
      srcValue: "`已选择${num}`",
    },
    "01c43f31c468414df65f8112046dfbeb": {
      clientVersion: "1.0.0",
      basepath: "/Users/zhsi/Documents/projects/react-multi/src/pages",
      ruleSetName: "javascript-rule",
      type: "Embedded Strings",
      file: "languages/index.jsx",
      linenum: "109",
      startpos: "21",
      endpos: "24",
      reason: "已选择",
      language: "javascript",
      key: "01c43f31c468414df65f8112046dfbeb",
    },
  },
}
 */
async function uploadFixedIssuedToVenus(params) {
    let { data, workPath, gitInfo, workNo, curFilePath } = params;
    const projectId = `${gitInfo.groupName}.${gitInfo.projectName}`;
    if (data) {
        //    {
        //     "filePath":"com/alibaba/com/test3",
        //     "content":"this is a test",
        //     "line":"888",
        //     "projectId":"test.test",
        //     "modifier":"feipeng",
        //     "tenantId":"ICBU"
        // }
        let issues = [];
        Object.keys(data).forEach((filePath) => {
            let fileData = data[filePath];
            fileData &&
                Object.keys(fileData).forEach((fileKey) => {
                    let dataitem = fileData[fileKey];
                    if (dataitem.mdsKey) {
                        const path = Path.join(dataitem.basepath, dataitem.file);
                        let relativePath = Path.relative(workPath, path);
                        issues.push({
                            filePath: relativePath,
                            projectId: projectId,
                            tenant: "CN",
                            content: dataitem.reason.replace(/^'|^"|'$|"$/gi, ""),
                            modifier: workNo,
                            line: dataitem.linenum,
                        });
                    }
                });
        });
        await (0, request_1.submitFixedIssued)({ source: "VSCode", issues, curFilePath });
    }
}
exports.uploadFixedIssuedToVenus = uploadFixedIssuedToVenus;
/**
 *
 * @param data 根据 value，从美杜莎获取数据
 * 数据模型
 * {
  "/Users/zhsi/Documents/projects/react-multi/src/pages/panda/walle/index.js": {
    "05684fe6b8916e0ce4763cac57b64a34": {
      clientVersion: "1.0.0",
      basepath: "/Users/zhsi/Documents/projects/react-multi",
      ruleSetName: "javascript-rule",
      type: "Embedded Strings",
      file: "src/pages/panda/walle/index.js",
      linenum: "42",
      startpos: "7",
      endpos: "10",
      reason: "汉堡王",
      language: "javascript",
      key: "05684fe6b8916e0ce4763cac57b64a34",
    },
  },
}
 */
async function searchResourceByValuesFromMedusa(data, path) {
    // 遍历取出所有抽取出来的文案
    let values = [];
    Object.keys(data).forEach((pagePath) => {
        let pageItem = data[pagePath];
        if ((path && path === pagePath) || !path) {
            pageItem &&
                Object.keys(pageItem).forEach((itemKey) => {
                    let item = pageItem[itemKey];
                    let content = item.reason;
                    content = (content && content.replace(/^'|^"|'$|"$/gi, "")) || "";
                    if (content && values.indexOf(content) == -1) {
                        values.push(content);
                    }
                });
        }
    });
    const appName = VSCode.workspace.getConfiguration().get("mds.i18n.mcms.appName");
    if (appName) {
        // medusa origin result
        let result = await (0, request_1.searchResourceByValuesMedusa)({ values, appName });
        // 根据文案，把美杜莎取出来的数据拼接到 data 上，然后在开启面板去选择
        Object.keys(data).forEach((pagePath) => {
            let pageItem = data[pagePath];
            pageItem && Object.keys(pageItem).forEach((itemKey) => {
                let item = pageItem[itemKey];
                let content = item.reason;
                content = (content && content.replace(/^'|^"|'$|"$/gi, "")) || "";
                let mcmsItem = result[content];
                if (mcmsItem && mcmsItem.resource_key) {
                    item.mcmsItem = mcmsItem;
                    pageItem[itemKey] = item;
                }
            });
            data[pagePath] = pageItem;
        });
        return data;
    }
    return;
}
exports.searchResourceByValuesFromMedusa = searchResourceByValuesFromMedusa;
/** 将美杜莎中查询到的 key 和 根据 key的规则 生成的 key 都拼接到原来的数据对象上
 * @param mcmsData
 * @param autoKeyData
 */
function joinMcmsKeyAndAutoKeyToData(mcmsData, autoKeyData) {
    Object.keys(mcmsData).forEach((fileName) => {
        let fileData = mcmsData[fileName];
        Object.keys(fileData).forEach((key) => {
            let dataitem = fileData[key];
            let autoKeyItem = autoKeyData.find((item) => {
                return (item.key === key && Path.join(item.basepath, item.file) === fileName);
            });
            if (autoKeyItem && autoKeyItem.mdsKey) {
                dataitem.mdsKeyAutoGenerate = autoKeyItem.mdsKey;
                dataitem.targeValue = autoKeyItem.targeValue;
                dataitem.srcValue = autoKeyItem.srcValue;
            }
            fileData[key] = dataitem;
        });
        mcmsData[fileName] = fileData;
    });
    return mcmsData;
}
exports.joinMcmsKeyAndAutoKeyToData = joinMcmsKeyAndAutoKeyToData;
/**
 * 文案按照文件修复的内容上传到美杜莎
 * @param path 被修复的文件
 * @param data 全量数据，带mdsKey的表示是被修复的
 * @param dataWithKey 本次被修复的
 */
function uploadFileDataToMedusa({ path, data, dataWithKey, appName, empId, exportData, }) {
    let fileData = data[path];
    let requests = [];
    dataWithKey.forEach((item) => {
        let fileItem = fileData[item.key];
        if (fileItem && fileItem.mdsKey) {
            const reasonTemp = fileItem.reason.replace(/^'|^"|^`|'$|"$|`$/gi, "");
            let data = {
                appName,
                key: fileItem.mdsKey,
                remark: "",
                i18n: [
                    {
                        language: item.language,
                        value: reasonTemp,
                    },
                ],
                empId: empId,
            };
            if (!exportData[item.language]) {
                exportData[item.language] = {};
            }
            if (!exportData["en_US"]) {
                exportData["en_US"] = {};
            }
            if (!exportData[item.language][fileItem.mdsKey]) {
                exportData[item.language][fileItem.mdsKey] = reasonTemp;
            }
            if (!(item.mcmsSelected && item.mcmsItem)) {
                //如果是使用 根据规则生成的key，则将自动翻译的英文也导入美杜莎
                data.i18n.push({
                    language: "en_US",
                    value: item.targeValue,
                });
                //将自动生成的英文放到exportData中，复用的美杜莎的key的文案的英文这里没有返回就先不放
                //TODO  需要美杜莎接口返回英文的文案放入到exportData中
                if (!exportData["en_US"][fileItem.mdsKey]) {
                    exportData["en_US"][fileItem.mdsKey] = item.targeValue;
                }
            }
            requests.push((0, request_1.insertOrUpdateMcmsByEmpId)(data));
        }
    });
    return new Promise((resolve, reject) => {
        Promise.all(requests).then((result) => {
            // utils.showBarItem(`${path}中修复的文案，同步美杜莎成功`);
            utils_1.default.logToSonarLintOutput(`${path}中修复的文案导入美杜莎成功`);
            resolve(exportData);
        }, (error) => {
            utils_1.default.logToSonarLintOutput(`${path}中修复的文案导入美杜莎失败`);
            reject();
        });
    });
}
exports.uploadFileDataToMedusa = uploadFileDataToMedusa;
/**
 *
 * @param 术语库 根据文案查询 key
 * 数据模型
 * {
  "/Users/zhsi/Documents/projects/react-multi/src/pages/panda/walle/index.js": {
    "05684fe6b8916e0ce4763cac57b64a34": {
      clientVersion: "1.0.0",
      basepath: "/Users/zhsi/Documents/projects/react-multi",
      ruleSetName: "javascript-rule",
      type: "Embedded Strings",
      file: "src/pages/panda/walle/index.js",
      linenum: "42",
      startpos: "7",
      endpos: "10",
      reason: "汉堡王",
      language: "javascript",
      key: "05684fe6b8916e0ce4763cac57b64a34",
    },
  },
}
 */
async function searcKeysFromTerm(args, path) {
    let { data } = args;
    const appName = utils_1.default.getVscodeConfig().appName;
    if (appName) {
        let params = await handleParams(args, appName);
        let result = await (0, request_1.requestKeys)(params);
        return result;
    }
    async function handleParams(args, appName) {
        let buEmail = await execAsync(`git config --get user.email `, {
            encoding: "utf8",
            maxBuffer: 5000 * 1024,
            cwd: null,
            env: null,
        });
        let { pandaConfigPath } = args;
        // 遍历取出所有抽取出来的文案
        let values = getValues(data);
        let pandaConfig = utils_1.default.readPandaConfig(pandaConfigPath);
        let sourceLang = (pandaConfig && pandaConfig.sourceLang) ? pandaConfig.sourceLang : 'zh-CN';
        let { empId, keySuffix, defaultLanguage = 'zh_CN' } = utils_1.default.getVscodeConfig();
        let p = {
            values,
            appName,
            sourceLang: defaultLanguage,
            targetLangs: ["en_US"],
            buz: keySuffix,
            email: buEmail,
            empId, // 操作美杜莎的权限人id
        };
        return p;
    }
    function getValues(data) {
        let values = [];
        Object.keys(data).forEach((pagePath) => {
            let pageItem = data[pagePath];
            if ((path && path === pagePath) || !path) {
                pageItem &&
                    Object.keys(pageItem).forEach((itemKey) => {
                        let item = pageItem[itemKey];
                        let content = item.reason;
                        content = (content && content.replace(/^'|^"|'$|"$/gi, "")) || "";
                        if (content && values.indexOf(content) == -1) {
                            values.push(content);
                        }
                    });
            }
        });
        return values;
    }
}
exports.searcKeysFromTerm = searcKeysFromTerm;
function addKeyResultToData(result, data) {
    Object.keys(data).forEach((pagePath) => {
        let pageItem = data[pagePath];
        pageItem && Object.keys(pageItem).forEach((itemKey) => {
            let item = pageItem[itemKey];
            let text = item.reason; // 源文案
            text = (text && text.replace(/^'|^"|'$|"$/gi, "")) || "";
            let mcmsItem = result[text];
            if (mcmsItem) {
                item.mcmsItem = mcmsItem; // mcmsItem 表示查询到的文案key数据
                pageItem[itemKey] = item;
            }
        });
        data[pagePath] = pageItem;
    });
    return data;
}
exports.addKeyResultToData = addKeyResultToData;
//# sourceMappingURL=pack.js.map