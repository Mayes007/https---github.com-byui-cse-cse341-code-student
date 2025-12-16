"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const VSCode = require("vscode");
const Path = require("path");
const utils_1 = require("./utils");
const config_1 = require("./config");
const check_1 = require("./check");
const i18nView_1 = require("./i18nView");
const constant_1 = require("./constant");
const pack_1 = require("./pack");
async function activate(context) {
    // 初始化utils
    utils_1.default.init();
    const userId = VSCode.workspace
        .getConfiguration()
        .get("mds.i18n.user.accessKey");
    if (!userId) {
        utils_1.default.showBarItem("🔴请先在用户配置中填写您的阿里工号");
        return;
    }
    //获取默认的配置项
    (0, pack_1.setVenusConfiguration)(context);
    //获取扫描规则集
    let ruleResult = await (0, pack_1.getScanRule)(context);
    if (ruleResult && ruleResult.length == 2) {
        let getRuleFailed = false;
        ruleResult.forEach((result) => {
            if (!result)
                getRuleFailed = true;
        });
        if (getRuleFailed) {
            utils_1.default.showBarItem("🔴获取规则集失败，请重新启动Venus插件");
            return;
        }
        else {
            utils_1.default.logToSonarLintOutput("获取规则集成功");
        }
    }
    else {
        utils_1.default.showBarItem("🔴获取规则集失败，请重新启动Venus插件");
        return;
    }
    VSCode.workspace.onDidChangeConfiguration((event) => {
        let affected = event.affectsConfiguration("mds.i18n.rule.fileExclusions");
        if (affected) {
            //推送配置文件到远端
            (0, pack_1.uploadExcludeFileConfiguration)(context);
        }
    });
    // 检查文件
    const checkPage = VSCode.commands.registerCommand("venus.checkPage", (arg) => {
        if (!arg) {
            VSCode.window.showWarningMessage("该操作不支持明亮行模式，请使用打开编辑器的右上角按钮操作");
            return;
        }
        const { code, errmsg } = (0, config_1.checkConfig)(utils_1.default, context, arg) || constant_1.CREATER_CONFIG_ERR[9999];
        if (code != 0) {
            return;
        }
        (0, check_1.check)(arg, context, utils_1.default);
    });
    // 检查文件夹
    const checkFile = VSCode.commands.registerCommand("venus.checkFile", (arg) => {
        if (!arg) {
            VSCode.window.showWarningMessage("该操作不支持明亮行模式，在文件右键选择操作");
            return;
        }
        const { code, errmsg } = (0, config_1.checkConfig)(utils_1.default, context, arg) || constant_1.CREATER_CONFIG_ERR[9999];
        if (code != 0) {
            return;
        }
        (0, check_1.check)(arg, context, utils_1.default, true);
    });
    const i18nView = new i18nView_1.I18nView(context, utils_1.default);
    const textView = VSCode.window.registerTreeDataProvider("venus.textView", i18nView);
    const refreshView = VSCode.commands.registerCommand("venus.refreshView", (arg) => {
        i18nView.refreshByClear();
    });
    const exportView = VSCode.commands.registerCommand("venus.exportView", (arg) => {
        i18nView.exportView();
    });
    const fixView = VSCode.commands.registerCommand("venus.fixView", (arg) => {
        (0, config_1.checkUesrJobId)(utils_1.default, context, () => i18nView.fix(arg, context, "fixAllFile"));
    });
    const fixFile = VSCode.commands.registerCommand("venus.fixFile", (arg) => {
        (0, config_1.checkUesrJobId)(utils_1.default, context, () => i18nView.fix(arg, context, "fixOneFile"));
    });
    const fixItem = VSCode.commands.registerCommand("venus.fixItem", (arg) => {
        (0, config_1.checkUesrJobId)(utils_1.default, context, () => i18nView.fix(arg, context, "fixItem"));
    });
    const ignoreItem = VSCode.commands.registerCommand("venus.ignoreItem", (arg) => {
        i18nView.ignoreItem(arg);
    });
    const clickItem = VSCode.commands.registerCommand("venus.clickItem", (arg) => {
        i18nView.clickItem(arg);
    });
    const ignoreFile = VSCode.commands.registerCommand("venus.ignoreFile", (arg) => {
        //将过滤规则推送到远端，同时修改配置文件
        (0, pack_1.addExcludeFile)(context, arg, false);
    });
    const ignoreFileFolder = VSCode.commands.registerCommand("venus.ignoreFileFolder", (arg) => {
        (0, pack_1.addExcludeFile)(context, arg, true);
    });
    const publishPack = VSCode.commands.registerCommand("venus.publishPack", (arg) => {
        const workPath = utils_1.default.getWorkUrl(context);
        const exportPath = Path.join(workPath, ".panda/export.json");
        let keyList = utils_1.default.getKeysFromExportJson(exportPath);
        i18nView.publishPack(keyList);
    });
    // 注册命令
    context.subscriptions.push(clickItem);
    context.subscriptions.push(ignoreFile);
    context.subscriptions.push(ignoreFileFolder);
    context.subscriptions.push(checkPage);
    context.subscriptions.push(checkFile);
    context.subscriptions.push(textView);
    context.subscriptions.push(exportView);
    context.subscriptions.push(refreshView);
    context.subscriptions.push(fixView);
    context.subscriptions.push(fixFile);
    context.subscriptions.push(fixItem);
    context.subscriptions.push(ignoreItem);
    context.subscriptions.push(publishPack);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map