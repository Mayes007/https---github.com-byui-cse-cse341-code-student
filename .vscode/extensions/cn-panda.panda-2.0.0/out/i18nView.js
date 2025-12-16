"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18nView = void 0;
const VSCode = require("vscode");
const Path = require("path");
const FS = require("fs");
const fs = require("fs-extra");
const _ = require("lodash");
const utils_1 = require("./utils");
const request_1 = require("./request");
const pack_1 = require("./pack");
const generateASTFile_1 = require("./generateASTFile");
const generateCode_1 = require("./generateCode");
const parseConfig_1 = require("./parseConfig");
const generateTemplate_1 = require("./generateTemplate");
const injectDependency_1 = require("./injectDependency");
const medusaWebview_1 = require("./medusaWebview");
const axios = require("axios").default;
const md5 = require("js-md5");
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
class I18nView {
    context;
    utils;
    _onDidChangeTreeData = new VSCode.EventEmitter();
    onDidChangeTreeData = this._onDidChangeTreeData.event;
    data = {};
    fixData = {};
    scanPath;
    exportPath;
    pandaConfigPath;
    exportdata = {};
    gitInfo = {};
    gitRepoUrl;
    workPath;
    workNo;
    defaultLanguage;
    constructor(context, utils) {
        this.context = context;
        this.utils = utils;
        // 获取本地缓存资源
        const workPath = utils.getWorkUrl(context);
        const gitInfo = utils.getProjectAndGroupName(workPath);
        const gitRepoUrl = `git@gitlab.alibaba-inc.com:${gitInfo.groupName}/${gitInfo.projectName}.git`;
        this.data = {}; //  读取.panda/scan.json文件里的扫描结果
        this.scanPath = "";
        if (!workPath) {
            utils.showBarItem(`🔴初始化失败`);
        }
        this.context = context;
        this.scanPath = Path.join(workPath, ".panda/scan.json");
        this.exportPath = Path.join(workPath, ".panda/export.json");
        this.pandaConfigPath = Path.join(workPath, "panda.config.js");
        this.gitInfo = gitInfo;
        this.gitRepoUrl = gitRepoUrl;
        this.workPath = workPath;
        this.workNo = VSCode.workspace
            .getConfiguration()
            .get("mds.i18n.user.accessKey");
        this.defaultLanguage =
            VSCode.workspace.getConfiguration().get("mds.i18n.text.language") ||
                "zh_CN";
    }
    getChildren(element) {
        console.log('getChildren', element);
        let dataTemp = {};
        const resData = [];
        // 没有数据说明是第一次渲染
        if (!element) {
            /** 统计扫描和修复的数量
             *  this.data 本次扫描的数据
             *  this.exportdata 历史中已经修复的数据
             */
            this.exportdata = {};
            // 由于不保存上次的数据，所以这里要获取一下 export.json 中的历史修复数据
            if (Object.keys(this.exportdata).length < 1) {
                if (!FS.existsSync(this.exportPath)) {
                    FS.writeFileSync(this.exportPath, "{}");
                }
                else {
                    let data = FS.readFileSync(this.exportPath, { encoding: "utf8" }) || "{}";
                    this.exportdata = JSON.parse(data) || {};
                }
            }
            // 为了提高性能，这里需要判断，如果this.data有数据，则使用this.data的数据
            if (Object.keys(this.data).length > 0) {
                dataTemp = this.data;
            }
            else {
                if (FS.existsSync(this.scanPath)) {
                    let data = FS.readFileSync(this.scanPath, { encoding: "utf8" }) || "{}";
                    dataTemp = JSON.parse(data) || {};
                    this.data = dataTemp;
                    this.fixData = {}; // 从 scanpath 中统计已修复的数据
                    let allItem = 0;
                    let notFixItem = 0;
                    let fixItem = 0;
                    Object.keys(dataTemp).forEach((path) => {
                        Object.keys(dataTemp[path]).forEach((key) => {
                            const { mdsKey, srcValue } = dataTemp[path][key];
                            allItem += 1;
                            if (mdsKey) {
                                this.fixData[mdsKey] = srcValue;
                                fixItem += 1;
                            }
                            else {
                                notFixItem += 1;
                            }
                        });
                    });
                    resData.push({
                        label: `问题总数: ${allItem} | 已修复: ${fixItem} | 待修复: ${notFixItem}`,
                        isTitle: true,
                        hasChild: false,
                    });
                }
            }
            /** 生成左侧面板 */
            Object.keys(dataTemp).forEach((key) => {
                const child = dataTemp[key];
                let filePath = "";
                const childBuffer = Object.keys(child).filter((key) => {
                    if (!filePath) {
                        filePath = child[key].file;
                    }
                    return !child[key].mdsKey; // mdsKey 文案是否已修复的标志
                });
                if (childBuffer.length > 0) {
                    resData.push({
                        label: key,
                        isTitle: false,
                        hasChild: true,
                        data: child,
                    });
                }
            });
        }
        else {
            // 这里是具体的文件
            const { data = {} } = element;
            Object.keys(data).forEach((item) => {
                const { reason, mdsKey } = data[item];
                if (!mdsKey) {
                    resData.push({
                        label: reason,
                        isTitle: false,
                        hasChild: false,
                        dataItem: data[item],
                    });
                }
            });
        }
        return resData;
    }
    getTreeItem(element) {
        let treeItem = {};
        // 这里获取的数据是 getChildren 数组里的每一个数据
        const { label, hasChild, isTitle } = element;
        if (!isTitle) {
            if (hasChild) {
                treeItem = { label, collapsibleState: 1, contextValue: "file" };
            }
            else {
                treeItem = {
                    label,
                    collapsibleState: 0,
                    contextValue: "page",
                    command: {
                        title: "点击跳转",
                        command: "venus.clickItem",
                        arguments: [element.dataItem],
                    },
                };
            }
        }
        else {
            treeItem = { label, collapsibleState: 0, contextValue: "viewTitle" };
        }
        return treeItem;
    }
    /** 美杜莎key生成规则
     * @param item
     * @returns
     */
    renderMdsKey(item) {
        //key的规则 ,//{{prefix}}_{{groupName}}_{{projectName}}_{{filePath}}_{{value}}_{{suffix}}
        const mcmsKeyRule = VSCode.workspace
            .getConfiguration()
            .get("mds.i18n.mcms.key");
        const keySuffix = VSCode.workspace
            .getConfiguration()
            .get("mds.i18n.mcms.keySuffix");
        const { basepath, file, targeValue, reason = "" } = item;
        const path = Path.join(basepath, file);
        let relativePath = Path.relative(this.workPath, path);
        let lastIndex = relativePath.lastIndexOf(".");
        let filePathStr = lastIndex > -1
            ? relativePath.slice(0, lastIndex).split("/").join(".")
            : relativePath.split("/").join(".");
        const reasonTemp = reason.replace(/^'|^"|'$|"$/gi, "");
        // let pathKey = file;
        // if (pathKey.length > 24) {
        //   pathKey = pathKey.slice(0, 24);
        // }
        let workKey = targeValue
            ?.split(" ")
            .filter((_) => _)
            .map((item) => {
            return (item
                .toLocaleLowerCase()
                .replace(/^.|^'|(\')+|(\")+|'$/g, (L) => L.toUpperCase()) || "");
        })
            .splice(0, 3)
            .join(".") || "";
        workKey = workKey.replace(/'|""/g, "");
        // if (workKey.length > 36) {
        //   workKey = workKey.slice(0, 36);
        // }
        let keyRuleArr = [];
        if (mcmsKeyRule.indexOf("groupName") > -1) {
            keyRuleArr.push(this.gitInfo.groupName);
        }
        if (mcmsKeyRule.indexOf("projectName") > -1) {
            keyRuleArr.push(this.gitInfo.projectName);
        }
        if (mcmsKeyRule.indexOf("filePath") > -1) {
            keyRuleArr.push(filePathStr);
        }
        keyRuleArr.push(workKey);
        let mdsKey = keyRuleArr.join("_");
        if (keySuffix) {
            mdsKey = `${mdsKey}_${keySuffix}`;
        }
        const similarItem = this.exportdata[this.defaultLanguage]
            ? this.exportdata[this.defaultLanguage][mdsKey]
            : "";
        // 检查修复的有无重复key
        if (similarItem) {
            // key重复但是内容不一样，就增加三个随机数字
            if (similarItem != reasonTemp) {
                let randomKey = this.utils.getRandomStr(3);
                while (this.exportdata[randomKey]) {
                    randomKey = this.utils.getRandomStr(3);
                }
                mdsKey = `${mdsKey}_${randomKey}`;
            }
        }
        // 这里已经将修复的数据赋值进去了，所以后面修复后直接保存即可
        // this.exportdata[mdsKey] = reasonTemp;
        return mdsKey;
    }
    /** 修复本地硬编码文件 */
    async fixFIle(path, itemList) {
        if (!FS.existsSync(path)) {
            this.utils.showBarItem("🔴路径不存在");
            return;
        }
        const sourceCode = FS.readFileSync(path, {
            encoding: "utf8",
        });
        //如果是当前文档中的内容，就用activeEditor
        // const sourceCode = activeEditor.document.getText();
        // generate AST
        let sourceAST = (0, generateASTFile_1.default)(sourceCode, {
            allowImportExportEverywhere: true,
            decoratorsBeforeExport: true,
            plugins: [
                "asyncGenerators",
                "classProperties",
                "decorators-legacy",
                "doExpressions",
                "exportExtensions",
                "exportDefaultFrom",
                "typescript",
                "functionSent",
                "functionBind",
                "jsx",
                "objectRestSpread",
                "dynamicImport",
                "numericSeparator",
                "optionalChaining",
                "optionalCatchBinding",
            ],
        });
        if (!sourceAST) {
            VSCode.window.showErrorMessage(`文件AST语法树解析失败:at${path}`);
        }
        const uri = VSCode.Uri.file(path);
        const getText = await VSCode.workspace.fs.readFile(uri);
        // const {
        //   fixStencil = 'i18n.get("$1")',
        //   toolStencil = 'import { i18n } from "@alife/bc-i18n-helpers";',
        // } = JSON.parse(this.context.workspaceState.get("config") || "{}");
        const fixStencil = VSCode.workspace
            .getConfiguration()
            .get("mds.i18n.mcms.method");
        const toolStencil = VSCode.workspace
            .getConfiguration()
            .get("mds.i18n.mcms.util");
        const Text = getText.toString();
        const textBySplit = Text.split("\n");
        const toolStencilRE = new RegExp(toolStencil, "ig");
        const hasTool = toolStencilRE.test(Text);
        const itenKeyBuffer = {};
        // 因为这里是按照文件夹一个一个处理的，所以取出当前文件夹下的数据做一下修改
        const pathData = this.data[path];
        let itemListLoc = {};
        const itemKeyList = itemList.map((item) => {
            itenKeyBuffer[item.key] = item;
            let locKeyTemp = `${item.linenum}_${item.startpos}_${item.endpos}`;
            itemListLoc[locKeyTemp] = item;
            return item.key;
        });
        traverse(sourceAST, {
            StringLiteral(path) {
                let { value, start, end, loc } = path.node;
                let startPos = loc.start;
                let endPos = loc.end;
                let _locKeyTemp = `${startPos.line}_${startPos.column}_${endPos.column}`;
                let item = itemListLoc[_locKeyTemp];
                if (item) {
                    let { reason, srcValue, targeValue, endpos, startpos, linenum, mdsKey, file, key, } = item;
                    if (Number(linenum) == startPos.line &&
                        Number(startpos) == startPos.column &&
                        Number(endpos) == endPos.column) {
                        let replaceText = fixStencil.replace("$key$", mdsKey);
                        replaceText = replaceText.replace("$defaultMessage$", value);
                        const macro = utils_1.default.addVariableToMacro(replaceText, []);
                        const macroMethodID = types.identifier(macro);
                        try {
                            path.replaceWith(macroMethodID);
                        }
                        catch (e) {
                            path.replaceWith(types.JSXExpressionContainer(macroMethodID));
                        }
                        pathData[key].mdsKey = mdsKey;
                        pathData[key].srcValue = srcValue;
                        path.skip();
                    }
                }
            },
            TemplateLiteral(path) {
                if (utils_1.default.isSimpleTemplate(path)) {
                    let { value, start, end, loc } = path.node;
                    path.isSimpleTemplate = true;
                    // {temp: '{textLength}一共有个字',variable:['textLength:textLength']}
                    let startPos = loc.start;
                    let endPos = loc.end;
                    //这里暂时考虑文案的 startPos.line与endPos.line相同
                    //TODO文案后面带了换行或者空格,这里可能会存在缺陷，需要兼容更多的场景
                    if (value && startPos.line < endPos.line) {
                        value = value.replace(/(\n+)$|(\s+)$/g, "");
                        endPos.column = startPos.column + value.length;
                    }
                    //这里暂时考虑文案的 startPos.line与endPos.line相同
                    let _locKeyTemp = `${startPos.line}_${startPos.column}_${endPos.column}`;
                    let item = itemListLoc[_locKeyTemp];
                    if (item) {
                        let { reason, srcValue, targeValue, endpos, startpos, linenum, mdsKey, file, key, } = item;
                        if (Number(linenum) == startPos.line &&
                            Number(startpos) == startPos.column &&
                            Number(endpos) == endPos.column) {
                            const icuTemplate = generateTemplate_1.default.fromES6Template(path, parseConfig_1.default.macro.placeholder);
                            const reasonTemp = reason.replace(/^'|^"|^`|'$|"$|`$/gi, "");
                            let replaceText = fixStencil.replace("$key$", mdsKey);
                            replaceText = replaceText.replace("$defaultMessage$", reasonTemp);
                            let macro = utils_1.default.addVariableToMacro(replaceText, icuTemplate.variable);
                            const macroMethodID = types.identifier(macro);
                            try {
                                path.replaceWith(macroMethodID);
                            }
                            catch (e) {
                                path.replaceWith(types.JSXExpressionContainer(macroMethodID));
                            }
                            pathData[key].mdsKey = mdsKey;
                            pathData[key].srcValue = srcValue;
                            path.skip();
                        }
                    }
                    //macro = addVariableToMacro(macro, icuTemplate.variable);
                    // const matchedCopy = matchCopy(icuTemplate.tmp, path, 'extract');
                }
            },
            JSXExpressionContainer(path) {
                if (path.isIncludedToSibling)
                    return;
                path.isOnlyWithSimpleExpressionAndJSXText =
                    utils_1.default.isOnlyWithSimpleExpressionAndJSXText(path);
                if (path.isOnlyWithSimpleExpressionAndJSXText) {
                    let { value, start, end, loc } = path.node;
                    let startPos = loc.start;
                    let endPos = loc.end;
                    let expressionOriginStr = sourceCode.slice(start, end);
                    Object.keys(itenKeyBuffer).forEach((kk) => {
                        let item = itenKeyBuffer[kk];
                        let { reason, srcValue, targeValue, endpos, startpos, linenum, mdsKey, file, key, } = item;
                        if (!item.hasBeenReplaced) {
                            const reasonTemp = reason.replace(/^'|^"|^`|'$|"$|`$/gi, "");
                            if (Number(item.linenum) === startPos.line &&
                                expressionOriginStr.indexOf(reasonTemp) > -1) {
                                const icuTemplate = generateTemplate_1.default.fromJSXText(path.parentPath, parseConfig_1.default.macro.placeholder);
                                let replaceText = fixStencil.replace("$key$", mdsKey);
                                replaceText = replaceText.replace("$defaultMessage$", reasonTemp);
                                replaceText = `{${replaceText}}`;
                                let macro = utils_1.default.addVariableToMacro(replaceText, icuTemplate.variable);
                                macro = `${macro}`;
                                // const macroMethodID = types.identifier(macro);
                                path.parent.children = [types.jSXText(macro)];
                                // path.replaceWith(types.jSXText(replaceText));
                                pathData[key].mdsKey = mdsKey;
                                pathData[key].srcValue = srcValue;
                                item.hasBeenReplaced = true;
                                path.skip();
                            }
                        }
                        itenKeyBuffer[kk] = item;
                    });
                }
            },
            JSXText(path) {
                let { value, start, end, loc } = path.node;
                let startPos = loc.start;
                let endPos = loc.end;
                let expressionOriginStr = sourceCode.slice(start, end);
                Object.keys(itenKeyBuffer).forEach((kk) => {
                    let item = itenKeyBuffer[kk];
                    let { reason, srcValue, targeValue, endpos, startpos, linenum, mdsKey, file, key, } = item;
                    if (!item.hasBeenReplaced) {
                        const reasonTemp = reason.replace(/^'|^"|^`|'$|"$|`$/gi, "");
                        if (Number(item.linenum) === startPos.line &&
                            value.indexOf(reasonTemp) > -1) {
                            let replaceText = fixStencil.replace("$key$", mdsKey);
                            replaceText = replaceText.replace("$defaultMessage$", reasonTemp);
                            let reasonTempStart = value.indexOf(reasonTemp);
                            let preStr = value.slice(0, reasonTempStart);
                            let reasonTempEnd = reasonTempStart + reasonTemp.length;
                            let suffixStr = value.slice(reasonTempEnd);
                            replaceText = `${preStr}{${replaceText}}${suffixStr}`;
                            if (path.isOnlyWithSimpleExpressionAndJSXText) {
                                const icuTemplate = generateTemplate_1.default.fromJSXText(path.parentPath, parseConfig_1.default.macro.placeholder);
                                let macro = utils_1.default.addVariableToMacro(replaceText, icuTemplate.variable);
                                path.parent.children = [types.jSXText(macro)];
                            }
                            else {
                                const macro = utils_1.default.addVariableToMacro(replaceText, []);
                                path.replaceWith(types.jSXText(macro));
                            }
                            pathData[key].mdsKey = mdsKey;
                            pathData[key].srcValue = srcValue;
                            path.skip();
                            item.hasBeenReplaced = true;
                        }
                    }
                    itenKeyBuffer[kk] = item;
                });
            },
        });
        // 注意依赖的工具包
        let replacedCode = "";
        try {
            let injectAST = (0, injectDependency_1.default)(sourceAST, path);
            replacedCode = (0, generateCode_1.default)(injectAST, sourceCode, {
                decoratorsBeforeExport: true,
            });
        }
        catch (e) {
            utils_1.default.logToSonarLintOutput("🔴i18n工具包引用注入失败");
            console.log('🔴i18n工具包引用注入失败');
            replacedCode = (0, generateCode_1.default)(sourceAST, sourceCode, {
                decoratorsBeforeExport: true,
            });
        }
        this.data[path] = pathData;
        // 使用读写模式
        // FS.writeFileSync(path, textBySplit.join("\n"), { flag: "r+" });
        FS.writeFileSync(path, replacedCode);
        this.refresh();
    }
    async getMdsKey(arg, dataWithKey) {
        // debugger;
        let keyAndValues = {};
        let argTemp = {};
        let res = [];
        arg.forEach((item) => {
            const { key, reason } = item;
            keyAndValues[key] = reason.replace(/^'|^"|'$|"$/gi, "");
            argTemp[key] = item;
        });
        const defaultLanguage = VSCode.workspace.getConfiguration().get("mds.i18n.text.language") ||
            "zh_CN";
        const param = {
            keyAndValues,
            sourceLang: defaultLanguage,
            targetLangs: ["en_US"],
            empId: VSCode.workspace.getConfiguration().get("mds.i18n.user.accessKey") ||
                "",
            fromAppName: "venus-vscode",
        };
        const data = await axios({
            method: "post",
            url: "https://mds-portal.alibaba-inc.com/api/openapi/translate/machineTranslate.json",
            data: param,
        })
            .then((v) => {
            const { data: { data = {}, code = 500 } = {} } = v;
            if (code == 200) {
                return data;
            }
            else {
                return {};
            }
        })
            .catch((err) => {
            this.utils.showBarItem(`🔴${err}`);
            return {};
        });
        // todo:dan 这里为啥要判断一下 data 的值 ？
        if (Object.keys(data).length > 0) {
            Object.keys(data).forEach((key) => {
                const argItem = argTemp[key];
                const { en_US = md5.hex(argItem.reason) } = data[key];
                argTemp[key] = {
                    ...argItem,
                    mdsKey: this.renderMdsKey({ ...argItem, targeValue: en_US + "" }),
                    srcValue: argItem.reason.replace(/^'|^"|'$|"$/gi, ""),
                    targeValue: en_US,
                };
            });
        }
        else {
            Object.keys(argTemp).forEach((key) => {
                const argItem = argTemp[key];
                const { reason } = argItem;
                const targeValue = md5.hex(reason.replace(/^'|^"|'$|"$/gi, ""));
                argTemp[key] = {
                    ...argItem,
                    mdsKey: this.renderMdsKey({ ...argItem, targeValue }),
                    srcValue: argItem.reason.replace(/^'|^"|'$|"$/gi, ""),
                    targeValue,
                };
            });
        }
        Object.keys(argTemp).forEach((key) => {
            res.push(argTemp[key]);
        });
        return res;
    }
    /** 修复单个文案
     * @param arg
     * @returns
     */
    async fixItem(arg, context) {
        const dataItem = arg.dataItem;
        if (dataItem) {
            const { basepath = "", file = "" } = dataItem;
            const path = Path.join(basepath, file);
            const fixArg = await this.getMdsKey([dataItem]);
            await this.fixFIle(path, fixArg);
            // 数据上报到 venus
            (0, pack_1.uploadFixedIssuedToVenus)({
                data: this.data,
                workPath: this.workPath,
                gitInfo: this.gitInfo,
                workNo: this.workNo,
                curFilePath: path,
            });
        }
        return;
    }
    /** 修复一个文件
     * @param arg
     * @returns
     */
    async fixOneFile(arg, context) {
        let appName = VSCode.workspace.getConfiguration().get("mds.i18n.mcms.appName") || "";
        let empId = VSCode.workspace.getConfiguration().get("mds.i18n.user.accessKey") || "";
        const { label: path, data, multiFile, dataWithKey } = arg;
        //通过面板展示出所有Key后点确认进行下一步操作
        if (dataWithKey && dataWithKey.length) {
            dataWithKey.map((item) => {
                if (item.mcmsItem && item.mcmsSelected) {
                    // 复用美杜莎的 key
                    item.mdsKey = item.mcmsItem.resource_key;
                }
                else {
                    // 使用本地生成的 key
                    item.mdsKey = item.mdsKeyAutoGenerate;
                }
                return item;
            });
            /** 修复本地硬编码文件 */
            await this.fixFIle(path, dataWithKey);
            // 将修复完的数据存到 exportdata 中 
            // this.addDataToExportJSON(path, dataWithKey);
            // 将修复完的文案导入到美杜莎 
            //在这里先请求美杜莎的数据，然后让用户自己选择key
            //需要根据this.data  来判断 dataWithKey中哪些文案
            if (!appName) {
                utils_1.default.showBarItem(`🔴请先配置美杜莎应用名`);
                return;
            }
            if (!empId) {
                utils_1.default.showBarItem(`🔴请先配置您的阿里工号`);
                return;
            }
            /** 将修复完的文案导入到美杜莎 */
            let medusaResult = await (0, pack_1.uploadFileDataToMedusa)({
                path,
                data: this.data,
                dataWithKey,
                appName,
                empId,
                exportData: this.exportdata,
            });
            /** 将修复完的数据存到 exportdata 中 */
            this.exportdata = medusaResult;
            if (!multiFile) {
                (0, pack_1.uploadFixedIssuedToVenus)({
                    data: this.data,
                    workPath: this.workPath,
                    gitInfo: this.gitInfo,
                    workNo: this.workNo,
                    curFilePath: path,
                });
            }
        }
        else {
            // todo:dan 为啥这里还有个data判断？
            // debugger;
            if (data) {
                const dataTemp = [];
                Object.keys(data).forEach((key) => {
                    const viewItem = data[key];
                    if (!viewItem.mdsKey) {
                        dataTemp.push(viewItem);
                    }
                });
                const fixArg = await this.getMdsKey(dataTemp, dataWithKey);
                // debugger;
                await this.fixFIle(path, fixArg);
                if (!multiFile) {
                    (0, pack_1.uploadFixedIssuedToVenus)({
                        data: this.data,
                        workPath: this.workPath,
                        gitInfo: this.gitInfo,
                        workNo: this.workNo,
                        curFilePath: path,
                    });
                }
            }
        }
        return;
    }
    /** 修复分发
     * @param arg
     * @param context
     * @param type
     */
    fix(arg, context, type) {
        utils_1.default.showBarItem(`$(sync~spin)开始查找文案...`);
        switch (type) {
            case "fixAllFile":
                this.fixAllFile(arg, context);
                break;
            case "fixOneFile":
                // debugger;
                this._fixOneFile(arg, context);
                break;
            case "fixItem":
                this._fixItem(arg, context);
                break;
            default:
                break;
        }
    }
    /** 修复所有文件
     * @param arg
     * @param context
     */
    async fixAllFile(arg, context) {
        if (FS.existsSync(this.scanPath)) {
            FS.writeFileSync(this.scanPath, "{}");
        }
        this.showMcmsWebViewPanel("fixAllFile", arg);
    }
    /** 修复单个文件
     * @param arg
     * @param context
     */
    async _fixOneFile(arg, context) {
        this.showMcmsWebViewPanel("fixOneFile", arg);
    }
    /** 修复单个文案
     * @param arg
     * @param context
     */
    async _fixItem(arg, context) {
        this.showMcmsWebViewPanel("fixItem", arg);
    }
    /** show WebView Panel */
    async showMcmsWebViewPanel(type, arg) {
        /** 1.准备数据 datatemp */
        let notReplaced = {};
        const { label: path, data, multiFile } = arg || {};
        let fixItemFilePath = "";
        //如果label ，data不为空，则是修复单个文件，只需要处理对应的文件即可
        let datatemp = {};
        if (type == "fixOneFile" && path) {
            //需要过滤掉已经被替换的文案
            let fileDatas = this.data[path];
            let notReplaced = {};
            Object.keys(fileDatas).forEach((kk) => {
                if (!fileDatas[kk].mdsKey) {
                    notReplaced[kk] = fileDatas[kk];
                }
            });
            //当前文件无需要被修复的文案
            if (!Object.keys(notReplaced).length) {
                return;
            }
            datatemp = { [path]: notReplaced };
        }
        else if (type == "fixAllFile") {
            notReplaced = {};
            Object.keys(this.data).forEach((filePath) => {
                let curFilePathData = this.data[filePath];
                let notReplacedCurFileData = {};
                Object.keys(curFilePathData).forEach((kk) => {
                    if (!curFilePathData[kk].mdsKey) {
                        notReplacedCurFileData[kk] = curFilePathData[kk];
                    }
                });
                if (Object.keys(notReplacedCurFileData).length) {
                    notReplaced[filePath] = notReplacedCurFileData;
                }
            });
            //无需要被修复的文件
            if (!Object.keys(notReplaced).length) {
                return;
            }
            datatemp = notReplaced;
        }
        else if (type == "fixItem") {
            let { dataItem } = arg;
            let { basepath = "", file = "", key } = dataItem;
            fixItemFilePath = Path.join(basepath, file);
            datatemp = { [fixItemFilePath]: { [key]: dataItem } };
        }
        /** 2.查询文案 */
        let result = await (0, pack_1.searcKeysFromTerm)({
            data: datatemp,
            pandaConfigPath: this.pandaConfigPath,
        });
        /** 3.把本地扫描数据 datatemp 和美杜莎查询数据拼接起来。 即，给 datatemp 增加了 mcmsItem 对象 */
        let dataWithMcmsItem = (0, pack_1.addKeyResultToData)(result, datatemp);
        /** TODO:OLD  */
        // /** 2.查询美杜莎文案 */
        // let mcmsResultData = await searchResourceByValuesFromMedusa(datatemp);
        // /** 3.提前生成 key */ 
        // // 给所有数据按规则本地生成一个key (提交修复时可选择用美杜莎key还是自动生成的key)。 
        // // 即，给 mcmsResultData 添加了 mdsKey, srcValue, targeValue  字段
        // let autoGenarateKeyData = await this.autoGenerateKey(mcmsResultData);
        // // 将 mdsData 和 mcmsResultData 拼接 最后再转换成 this.data 的数据格式,主要增加 mcmsItem 和 mdsKeyAutoGenerate 属性
        // // mcmsItem 表示从美杜莎中匹配到的数据项，mdsKeyAutoGenerate 是根据 key 规则自动生成的 key,
        // //不能直接将自动生成的 key 赋值到 mdsKey 属性，因为 mdsKey 属性一旦有值，表明该文案已经被替换成了 key 的写法
        // let dataWithMcmsKeyAndAutoKey = joinMcmsKeyAndAutoKeyToData(
        //   mcmsResultData,
        //   autoGenarateKeyData
        // );
        /** TODO:OLD  */
        /** 4.打开 webview 面板 */
        if (type === "fixAllFile") {
            medusaWebview_1.MedusaWebView.createOrShow(this.context.extensionPath, dataWithMcmsItem, (data) => {
                this.confirmFixFile(data);
            });
        }
        else if (type === "fixOneFile") {
            medusaWebview_1.MedusaWebView.createOrShow(this.context.extensionPath, dataWithMcmsItem, (data) => {
                this.confirmFixFile(data, path);
            });
        }
        else if (type === "fixItem") {
            medusaWebview_1.MedusaWebView.createOrShow(this.context.extensionPath, dataWithMcmsItem, (data) => {
                this.confirmFixFile(data, fixItemFilePath, arg.dataItem);
            });
        }
        utils_1.default.showBarItem(`key生成完成，请确认或者取消修复`);
    }
    /** 本地生成 key */
    autoGenerateKey = async (mcmsResultData) => {
        let vempData = [];
        Object.keys(mcmsResultData).forEach((fileName) => {
            let fileData = mcmsResultData[fileName];
            Object.keys(fileData).forEach((id) => {
                let temp = fileData[id];
                if (!temp.mdsKey) {
                    vempData.push(temp);
                }
            });
        });
        // 如果用户选择不复用美杜莎key，就使用按规则生成的 key
        let autoGenarateKeyData = await this.getMdsKey(vempData);
        return autoGenarateKeyData;
    };
    /** 确认修复所有的文件
     * @param data webview table 中选中的数据
     * @param filepath 修复单个文件时需要传入的文件path
     * @param dataItem 修复单个item时传入的单个文案
     * @returns
     */
    //TODO: webview 中的确定按钮 确认修复
    confirmFixFile(data, filepath, dataItem) {
        /** 1. 修复本地文件
         *  2. 更新 美杜莎
         *  3. 数据上报 到 venus
         *  4. 发布语言包
         * */
        utils_1.default.showBarItem(`$(sync~spin)开始修复......`);
        console.log('----- before -----');
        console.log('this.data ==', this.data);
        console.log('data ==', data);
        let requests = [];
        Object.keys(this.data).forEach(async (path) => {
            let pathFile = this.data[path];
            if (dataItem && dataItem.key) {
                pathFile = { [dataItem.key]: dataItem };
            }
            if (!filepath || (filepath && filepath === path))
                requests.push(this.fixOneFile({
                    label: path,
                    isTitle: false,
                    data: pathFile,
                    hasChild: true,
                    multiFile: true,
                    dataWithKey: data,
                }));
        });
        Promise.all(requests).then((result) => {
            utils_1.default.showBarItem(`修复成功`);
            utils_1.default.logToSonarLintOutput("修复成功");
            /** 数据上报 Venus */
            (0, pack_1.uploadFixedIssuedToVenus)({
                data: this.data,
                workPath: this.workPath,
                gitInfo: this.gitInfo,
                workNo: this.workNo,
                // curFilePath: path,
            });
            /** 发布语言包 */
            console.log('----- after -----');
            console.log('this.data ==', this.data);
            console.log('data ==', data);
            let keys = data.map(each => {
                return each.mdsKey;
            });
            console.log(keys);
            this.publishPack(keys);
        });
        return;
    }
    /** 发布语言包
    */
    async publishPack(keyList) {
        console.log('keyList ===', keyList, this.exportdata);
        utils_1.default.showBarItem(`$(sync~spin)开始发布日常语言包`);
        let PANDA_CONFIG_PATH = this.pandaConfigPath;
        let config = utils_1.default.readPandaConfig(PANDA_CONFIG_PATH);
        let { id: packId = 0, version = 0 } = (config && config.pack) ? config.pack : {};
        if (packId) {
            let params = {
                packId,
                version,
                mcmsKeyListString: keyList,
                // appNames: [VSCode.workspace.getConfiguration().get("mds.i18n.mcms.appName") || '']
            };
            let newVersion = await (0, request_1.requestPulishPack)(params);
            if (newVersion) {
                // 语言包发布成功
                utils_1.default.showBarItem(`日常语言包(version:${newVersion})发布完成，如需发布上线，请前往Panda平台手动发布`);
                // 发布语言包时，会判断该版本 version 是否已经发布上线
                // 如果当前版本已经发布上线了，会自动创建新的版本，所以需要修改用户本地 panda.config.js 文件
                utils_1.default.rewritePandaConfig(PANDA_CONFIG_PATH, newVersion);
            }
        }
        else {
            utils_1.default.showBarItem(`🔴缺失语言包配置，无法发布语言包`);
        }
    }
    async ignoreItem(arg) {
        const langList = [
            "asa",
            "asax",
            "ascx",
            "ashx",
            "asmx",
            "asp",
            "aspx",
            "axd",
            "cshtml",
            "ejs",
            "htm",
            "html",
            "inc",
            "jsp",
            "jspf",
            "jspx",
            "mas",
            "master",
            "mi",
            "php",
            "shtml",
            "skin",
            "tag",
            "vm",
            "xhtml",
            "as",
            "js",
            "jsx",
            "tsx",
        ];
        const { dataItem } = arg;
        if (dataItem) {
            const { basepath, file, linenum, language, reason } = dataItem;
            const path = Path.join(basepath, file);
            if (!FS.existsSync(path)) {
                this.utils.showBarItem("🔴路径不存在");
                return;
            }
            const uri = VSCode.Uri.file(path);
            const getText = await VSCode.workspace.fs.readFile(uri);
            const Text = getText.toString();
            const splitFlage = /\r\n/gi.test(Text) ? "\r\n" : "\n";
            const textBySplit = Text.split(splitFlage);
            let rendeBrackets = -1;
            let isReact = false;
            const textBySplitLenth = textBySplit.length;
            // 如果一直等于最后一行，说明他的文件写错了，但是由于其在render 函数里，所以还是使用jsx语法来屏蔽
            let rendeBracketsRight = textBySplitLenth;
            const reactLine = textBySplit.findIndex((str) => /from.*react/.test(str));
            const renderLine = textBySplit.findIndex((str) => /render\(\)/.test(str));
            const linenumTemp = Number(linenum) - 1;
            if (renderLine >= 0 && language == "javascript") {
                let i = renderLine;
                for (i = renderLine; i < textBySplitLenth; i++) {
                    // 判断左边括号
                    if (/\{/.test(textBySplit[i])) {
                        // 第一次的时候要加 2
                        if (rendeBrackets === -1) {
                            rendeBrackets += 2;
                        }
                        else {
                            rendeBrackets += 1;
                        }
                    }
                    // 判断右边括号
                    if (/\}/.test(textBySplit[i])) {
                        // 第一次的就直接是右边括号，说明语法错误了，推出循环吧
                        if (rendeBrackets === -1) {
                            i = textBySplitLenth;
                        }
                        else {
                            rendeBrackets -= 1;
                        }
                    }
                    // 说明平衡了
                    if (rendeBrackets == 0) {
                        rendeBracketsRight = i;
                        i = textBySplitLenth;
                    }
                }
            }
            if (language == "javascript" && // 是javascript规则
                reactLine >= 0 &&
                reactLine < linenumTemp && // 引入了react
                renderLine >= 0 &&
                renderLine <= linenumTemp && // 并且实现了render
                rendeBracketsRight >= linenumTemp // 判断是不是在render 函数里
            ) {
                isReact = true;
            }
            const pathData = this.data[path];
            Object.keys(pathData).forEach((key) => {
                const itemBykey = pathData[key];
                const { linenum: linenumByKey, mdsKey } = itemBykey;
                if (linenum == linenumByKey && // 同一行
                    !mdsKey // 没有替换过
                ) {
                    delete pathData[key];
                }
            });
            this.data[path] = pathData;
            const textBySplitTemp = textBySplit[linenumTemp].split("");
            if (language == "javascript") {
                if (isReact) {
                    if (textBySplit[linenumTemp].indexOf(`$NON-NLS-L$`) == -1) {
                        textBySplitTemp.push(`  {/* $NON-NLS-L$ */}`);
                    }
                }
                else {
                    if (textBySplit[linenumTemp].indexOf(`$NON-NLS-L$`) == -1) {
                        textBySplitTemp.push(` // $NON-NLS-L$`);
                    }
                }
            }
            if (language == "html") {
                if (textBySplit[linenumTemp].indexOf(`$NON-NLS-L$`)) {
                    textBySplitTemp.push(`  <!-- $NON-NLS-L$ --> `);
                }
            }
            textBySplit[linenumTemp] = textBySplitTemp.join("");
            //将忽略的文案上报
            let relativePath = Path.relative(this.workPath, path);
            const tenentID = VSCode.workspace
                .getConfiguration()
                .get("mds.i18n.tenantId");
            // let content = reason ? reason.replace(/^'|^"|^`|'$|"$|`$/gi, "") : "";
            if (reason) {
                (0, request_1.ignoreOrFalsePositive)({
                    repoUrl: this.gitRepoUrl,
                    filePath: relativePath,
                    modifier: VSCode.workspace
                        .getConfiguration()
                        .get("mds.i18n.user.accessKey") || "",
                    issueTagEnum: "Ignore",
                    content: reason,
                    note: "",
                    source: "VSCode",
                    // tenantId: tenentID || "",
                });
            }
            // 使用读写模式
            FS.writeFileSync(path, textBySplit.join(splitFlage), { flag: "r+" });
            this.refresh();
        }
    }
    exportView() {
        // const { outName = "venus_i18n" } = JSON.parse(
        //   this.context.workspaceState.get("config") || "{}"
        // );
        // const workPath = this.utils.getWorkUrl(this.context);
        // const exportPath = Path.join(workPath, `${outName}.json`);
        // FS.writeFileSync(exportPath, JSON.stringify(this.exportdata, null, 2));
        // VSCode.workspace.openTextDocument(exportPath).then((document) => {
        //   VSCode.window.showTextDocument(document);
        // });
        //上传到美杜莎
        let requests = [];
        let appName = VSCode.workspace.getConfiguration().get("mds.i18n.mcms.appName") || "";
        let empId = VSCode.workspace.getConfiguration().get("mds.i18n.user.accessKey") || "";
        if (!appName) {
            utils_1.default.showBarItem(`🔴请先配置美杜莎应用名`);
            return;
        }
        if (!empId) {
            utils_1.default.showBarItem(`🔴请先配置您的阿里工号`);
            return;
        }
        let dataMeusa = {};
        Object.keys(this.exportdata).forEach((lang) => {
            let langData = this.exportdata[lang];
            Object.keys(langData).forEach((key) => {
                if (!dataMeusa[key]) {
                    dataMeusa[key] = {
                        appName,
                        key,
                        remark: "",
                        i18n: [
                            {
                                language: lang,
                                value: langData[key],
                            },
                        ],
                        empId: empId,
                    };
                }
                else {
                    dataMeusa[key].i18n.push({ language: lang, value: langData[key] });
                }
            });
        });
        Object.keys(dataMeusa).forEach((key) => {
            requests.push((0, request_1.insertOrUpdateMcmsByEmpId)(dataMeusa[key]));
        });
        Promise.all(requests).then((result) => {
            utils_1.default.showBarItem(`导入美杜莎成功`);
            utils_1.default.logToSonarLintOutput("导入美杜莎成功");
        });
    }
    /** 清空列表，使用文件内的数据 */
    refreshByClear() {
        this.data = {};
        this._onDidChangeTreeData.fire(undefined);
    }
    /** 刷新列表,并保存数据, 1秒内执行一次*/
    refresh = _.debounce(() => {
        FS.writeFileSync(this.scanPath, JSON.stringify(this.data));
        FS.writeFileSync(this.exportPath, JSON.stringify(this.exportdata));
        this.data = {};
        this.exportdata = {};
        this._onDidChangeTreeData.fire(undefined);
    }, 1000);
    /** 点击左侧面板 跳转到具体页面
     * @param arg 点击的具体项目
     */
    clickItem(arg) {
        const { basepath, file, linenum, startpos, endpos } = arg;
        const linenumTemp = Number(linenum) - 1;
        const startposTemp = Number(startpos);
        const endposTemp = Number(endpos);
        VSCode.workspace
            .openTextDocument(Path.join(basepath, file))
            .then((document) => {
            VSCode.window.showTextDocument(document, {
                selection: new VSCode.Range(new VSCode.Position(linenumTemp, startposTemp), new VSCode.Position(linenumTemp, endposTemp)),
            });
        });
    }
}
exports.I18nView = I18nView;
//# sourceMappingURL=i18nView.js.map