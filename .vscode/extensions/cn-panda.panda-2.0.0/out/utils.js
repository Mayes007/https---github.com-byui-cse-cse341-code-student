"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VSCode = require("vscode");
const babylon = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;
const constant_1 = require("./constant");
const Path = require("path");
const FS = require("fs");
const baseName = "Venus";
const fs = require("fs-extra");
const utils = {
    sonarlintOutput: VSCode.window.createOutputChannel(baseName),
    collection: VSCode.languages.createDiagnosticCollection(baseName),
    statusBarItem: VSCode.window.createStatusBarItem(VSCode.StatusBarAlignment.Left, 3),
    /**
     *  初始化需要用的配置
     * @param name 插件标识，默认是 venus
     */
    init(name = "") {
        if (name) {
            // 下方输出窗口初始化
            this.sonarlintOutput = VSCode.window.createOutputChannel(name);
            // 问题输出窗口初始化
            this.collection = VSCode.languages.createDiagnosticCollection(name);
        }
    },
    /**
     * 在输出窗口打印信息
     * @param message 要打印的信息
     */
    logToSonarLintOutput(message) {
        if (message) {
            this.sonarlintOutput.appendLine(message);
        }
    },
    /**
     * 在编辑器下方展示数据
     * @param text 展示的数据，为空则关闭显示
     */
    showBarItem(text) {
        if (text) {
            this.statusBarItem.text = text;
            this.statusBarItem.show();
        }
        else {
            this.statusBarItem.hide();
        }
    },
    /**
     * 获取根目录
     * @param context  上下文
     * @param arg  其他参数
     */
    getWorkUrl(context, arg = {}) {
        const workspaceFolders = VSCode.workspace.workspaceFolders;
        const { uri: { _fsPath: workPath = "" } = {} } = workspaceFolders?.find((item) => {
            const { uri: { _fsPath: workPath = "" }, } = item;
            const { _fsPath: argPath = "" } = arg;
            if (argPath) {
                const absolutePath = Path.relative(workPath, argPath);
                return !Path.isAbsolute(absolutePath);
            }
            return true;
        }) || { uri: { _fsPath: "" } };
        return workPath;
    },
    /**
     * 获取随机字符串
     * @param len 长度
     * @param prefix 前缀
     */
    getRandomStr(len, prefix = "") {
        let text = "", prefixLen = prefix ? prefix.length : 0;
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < len - prefixLen; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return prefix + text;
    },
    //获取 git 信息
    getProjectAndGroupName(workPath) {
        const gitPath = Path.join(workPath, ".git/config");
        let gitConfig = "";
        let match;
        let pg;
        if (FS.existsSync(gitPath)) {
            gitConfig = FS.readFileSync(gitPath, { encoding: "utf8" });
            if (/git@gitlab.alibaba-inc.com:(.*)/.test(gitConfig)) {
                match = gitConfig.match(/git@gitlab.alibaba-inc.com:(.*)/);
                if (match && match[1]) {
                    pg = match[1].split("/");
                    return {
                        groupName: pg[0],
                        projectName: pg[1].replace(".git", ""),
                    };
                }
            }
            else if (/gitlab.alibaba-inc.com(.*)/.test(gitConfig)) {
                match = gitConfig.match(/gitlab.alibaba-inc.com(.*)/);
                if (match && match[1]) {
                    pg = match[1].split("/");
                    return {
                        groupName: pg[1],
                        projectName: pg[2].replace(".git", ""),
                    };
                }
            }
        }
        return null;
    },
    // getProjectAndGroupName(workPath: string) {
    //   const gitPath = Path.join(workPath, ".git/config");
    //   let gitConfig = "";
    //   let match;
    //   let pg;
    //   if (FS.existsSync(gitPath)) {
    //     gitConfig = FS.readFileSync(gitPath, { encoding: "utf8" });
    //     if (!/git@gitlab.alibaba-inc.com:(.*)/.test(gitConfig)) {
    //       gitConfig = "";
    //     }
    //   }
    //   if (!gitConfig) {
    //     return null;
    //   }
    //   match = gitConfig.match(/git@gitlab.alibaba-inc.com:(.*)/);
    //   if (match && match[1]) {
    //     pg = match[1].split("/");
    //     return {
    //       groupName: pg[0],
    //       projectName: pg[1].replace(".git", ""),
    //     };
    //   }
    // },
    getCurBranch(workPath) {
        var headerFile = Path.join(workPath, ".git/HEAD");
        var gitVersion = (FS.existsSync(headerFile) &&
            FS.readFileSync(headerFile, { encoding: "utf8" })) ||
            "";
        var arr = gitVersion.split(/refs[\\\/]heads[\\\/]/g);
        var v = (arr && arr[1]) || "";
        return v.trim();
    },
    /**
     * 获取配置项
     * @returns
     */
    getVenusConfigration() {
        //获取TenantID
        const tenentID = VSCode.workspace
            .getConfiguration()
            .get("mds.i18n.tenantId");
        //获取文件排除选项
        let fileExclusions = VSCode.workspace
            .getConfiguration()
            .get("mds.i18n.rule.fileExclusions");
        fileExclusions.map((item) => {
            return item.replace(/\*/g, "\\*");
        });
        fileExclusions = fileExclusions ? fileExclusions.join(",") : "";
        //获取javascript 规则集
        let jsRuleName = VSCode.workspace
            .getConfiguration()
            .get("mds.i18n.rule.JavaciptRuleType");
        if (jsRuleName === "None")
            jsRuleName = constant_1.DEFAULT_JAVASCRIPT_RULE;
        //获取html 规则集
        let htmlRuleName = VSCode.workspace
            .getConfiguration()
            .get("mds.i18n.rule.HtmlRuleType");
        if (htmlRuleName === "None")
            htmlRuleName = constant_1.DEFAULT_HTML_RULE;
        //获取美杜莎应用名
        let mcmsAppName = VSCode.workspace
            .getConfiguration()
            .get("mds.i18n.mcms.appName");
        //获取员工工号
        let workNo = VSCode.workspace
            .getConfiguration()
            .get("mds.i18n.user.accessKey");
        return {
            tenentID,
            workNo,
            mcmsAppName,
            fileExclusions,
            htmlRuleName,
            jsRuleName,
        };
    },
    /**
     * 生成hash值
     * @param text
     * @returns
     */
    hashStrToNum(text = "") {
        let hash = 5381;
        let index = text.length;
        while (index) {
            hash = (hash * 33) ^ text.charCodeAt(--index);
        }
        return hash >>> 0;
    },
    isSimpleTemplate(path) {
        const node = path.node;
        const expressions = node.expressions || [];
        const notIdentifierAndMemberExpression = expressions.find((e) => {
            return e.type !== "Identifier" && e.type !== "MemberExpression";
        });
        // all the expressions is identifier
        return !notIdentifierAndMemberExpression;
    },
    addVariableToMacro(macroString, variableList) {
        const variableString = `{ ${variableList.join(", ")} }`;
        // if with config $i18n.get({id:"$key$",dm:"$defaultMessage$"}, $variable$)
        if (macroString.match(constant_1.MACRO_VAR_REPLACE_REG)) {
            return macroString.replace(constant_1.MACRO_VAR_REPLACE_REG, variableString);
        }
        if (variableList.length === 0)
            return macroString;
        const macroAST = babylon.parse(macroString);
        traverse(macroAST, {
            CallExpression(path) {
                path.node.arguments.push(types.identifier(variableString));
            },
        });
        let macro = generator(macroAST, {
            compact: false,
            concise: false,
        }).code;
        macro = macro.replace(";", "");
        return macro;
    },
    isOnlyWithSimpleExpressionAndJSXText(path) {
        if (!path.parent || path.parent.type !== "JSXElement")
            return false;
        const children = path.parent.children || [];
        const simpleExpressions = children.filter((child) => {
            const isSimpleExpression = child.type === "JSXExpressionContainer" &&
                (child.expression.type === "Identifier" ||
                    (child.expression.type === "MemberExpression" &&
                        child.expression.object.type === "Identifier"));
            return isSimpleExpression;
        });
        const JSXTexts = children.filter((child) => {
            return child.type === "JSXText" && child.value && child.value.trim();
        });
        return (JSXTexts.length > 0 &&
            simpleExpressions.length + JSXTexts.length === children.length);
    },
    objToString(obj, space) {
        let indent;
        let isArray;
        switch (typeof obj) {
            case "string":
                return '"' + obj.replace(/(?<!\\)"/g, '\\"') + '"';
            case "function":
                return obj.toString();
            case "object":
                if (obj instanceof RegExp)
                    return obj.toString();
                indent = Array(space || 2).join("\t");
                isArray = Array.isArray(obj);
                return ("{["[+isArray] +
                    Object.keys(obj)
                        .map(function (key) {
                        return ("\n\t" +
                            indent +
                            (isArray ? "" : key + ": ") +
                            this.objToString(obj[key], (space || 2) + 1));
                    })
                        .join(",") +
                    "\n" +
                    indent +
                    "}]"[+isArray]);
            default:
                return obj.toString();
        }
    },
    /** 读取 panda.config.js
      */
    readPandaConfig(path = '') {
        if (fs.pathExistsSync(path)) {
            let _module = require(path);
            let config = _module && _module.extract ? _module.extract : {};
            return config;
        }
        else {
            return {};
        }
    },
    /** 重写 panda.config.js
    */
    async rewritePandaConfig(path = '', newVersion) {
        let configJS = "";
        const CONFIG_JS_PATH = path;
        const configFile = fs.readFileSync(CONFIG_JS_PATH, { encoding: "utf8" });
        const ast = babylon.parse(configFile);
        traverse(ast, {
            ObjectProperty(nodePath) {
                const { node } = nodePath;
                const key = node.key && node.key.name;
                if (!key || (key !== "pack"))
                    return;
                nodePath.stop();
                // 写入新的 version 值
                let properties = node.value.properties;
                properties.map(each => {
                    if (each.key.name === 'version') {
                        each.value.value = newVersion;
                    }
                });
            },
        });
        configJS = generator(ast).code;
        fs.writeFileSync(CONFIG_JS_PATH, configJS);
    },
    /** 读取 export json 文件中的 key 数据 */
    getKeysFromExportJson(exportPath) {
        if (!FS.existsSync(exportPath)) {
            utils.showBarItem(`🔴缺失 export json`);
            return;
        }
        let data = FS.readFileSync(exportPath, { encoding: "utf8" }) || "{}";
        let exportData = JSON.parse(data);
        let allKeys = [];
        Object.keys(exportData).map(lang => {
            let langObj = exportData[lang] || {};
            Object.keys(langObj).map(mcmsKey => {
                allKeys.push(mcmsKey);
            });
        });
        // 去重
        let keys = new Set(allKeys);
        return Array.from(keys);
    },
    /** 读取 vscode 配置数据 */
    getVscodeConfig() {
        let appName = VSCode.workspace.getConfiguration().get("mds.i18n.mcms.appName") || "";
        let empId = VSCode.workspace.getConfiguration().get("mds.i18n.user.accessKey") || "";
        let defaultLanguage = VSCode.workspace.getConfiguration().get("mds.i18n.text.language") || "";
        let keySuffix = VSCode.workspace.getConfiguration().get("mds.i18n.mcms.keySuffix") || '';
        return {
            appName,
            empId,
            defaultLanguage,
            keySuffix,
        };
    }
};
exports.default = utils;
//# sourceMappingURL=utils.js.map