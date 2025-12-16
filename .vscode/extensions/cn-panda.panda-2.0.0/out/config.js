"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUesrJobId = exports.checkConfig = void 0;
const VSCode = require("vscode");
const FS = require("fs");
const Path = require("path");
const axios = require("axios").default;
const constant_1 = require("./constant");
const configName = "venusconfig.json";
const checkName = "check.json";
const scanName = "scan.json";
const configPath = ".panda";
/**
 * 生成配置文件
 * @param utils 工具函数
 * @param context 上下文
 * @param work.panda/ 配置生成地址
 * @param workConfigPath  生成的路径
 */
function createrConfig(utils, context, workConfigPath, configFIlePath) {
    // TODO: 后面发布后 undefined	 需要改成发布人的名字
    const { packageJSON: { version = "" } = {} } = VSCode.extensions.getExtension("Venus.venus-vscod") || {};
    const { extensionPath } = context;
    const configPath = Path.join(extensionPath, "static", "config", "config.json");
    if (configFIlePath) {
        FS.mkdirSync(configFIlePath);
    }
    // 获取插件的配置模版
    if (FS.existsSync(configPath)) {
        let data = undefined;
        let dataByJson = undefined;
        // 读取模版信息
        try {
            data = FS.readFileSync(configPath, { encoding: "utf8" });
            dataByJson = JSON.parse(data);
        }
        catch (err) {
            utils.showBarItem(`${constant_1.CREATER_CONFIG_ERR[1004].errmsg}: ${err}`);
            return;
        }
        if (!data) {
            utils.showBarItem(`${constant_1.CREATER_CONFIG_ERR[1006].errmsg}`);
            FS.rmdirSync(configFIlePath);
            return;
        }
        // 判断版本
        if (dataByJson?.version != version) {
            utils.showBarItem(`${constant_1.CREATER_CONFIG_ERR[1006].errmsg}`);
            return;
        }
        try {
            workConfigPath.forEach((url) => {
                const workConfigFilePath = new RegExp(configName, "ig");
                if (workConfigFilePath.test(url)) {
                    try {
                        FS.writeFileSync(url, data);
                        context.workspaceState.update("config", data);
                    }
                    catch (err) {
                        utils.showBarItem(`${constant_1.CREATER_CONFIG_ERR[1005].errmsg}: ${err}`);
                        return;
                    }
                }
                else {
                    try {
                        FS.writeFileSync(url, "");
                    }
                    catch (err) {
                        utils.showBarItem(`${constant_1.CREATER_CONFIG_ERR[1005].errmsg}: ${err}`);
                        return;
                    }
                }
            });
            utils.showBarItem(constant_1.CREATER_CONFIG_ERR[1].errmsg);
        }
        catch (err) {
            utils.showBarItem(`${constant_1.CREATER_CONFIG_ERR[1005].errmsg}: ${err}`);
            return;
        }
    }
    else {
        utils.showBarItem(constant_1.CREATER_CONFIG_ERR[1003].errmsg);
    }
    // VSCode.window.showInformationMessage('没有在项目内发现配置文件，是否自动创建配置文件', ...[ '确定', '取消' ])
    // .then(value => {
    // 	if(value == '确定'){
    // 		// TODO: 后面发布后 undefined	 需要改成发布人的名字
    // 		const { packageJSON: { version = ''  } = {} } = VSCode.extensions.getExtension('Venus.venus-vscod') || {};
    // 		const { extensionPath } = context;
    // 		const configPath = Path.join(	extensionPath, 'static', 'config', 'config.json');
    // 		if(configFIlePath){
    // 			FS.mkdirSync(configFIlePath);
    // 		}
    // 		// 获取插件的配置模版
    // 		if(FS.existsSync(configPath)){
    // 			let data: any = undefined;
    // 			let dataByJson: any = undefined;
    // 			// 读取模版信息
    // 			try {
    // 				data =  FS.readFileSync(configPath, { encoding: 'utf8' });
    // 				dataByJson = JSON.parse(data);
    // 			} catch(err){
    // 				utils.showBarItem(`${CREATER_CONFIG_ERR[1004].errmsg}: ${err}`)
    // 				return;
    // 			}
    // 			if (!data) {
    // 				utils.showBarItem(`${CREATER_CONFIG_ERR[1006].errmsg}`)
    // 				FS.rmdirSync(configFIlePath);
    // 				return;
    // 			}
    // 			// 判断版本
    // 			if(dataByJson?.version != version){
    // 				utils.showBarItem(`${CREATER_CONFIG_ERR[1006].errmsg}`)
    // 				return;
    // 			}
    // 			try {
    // 				workConfigPath.forEach(url => {
    // 				 const workConfigFilePath =  new RegExp(configName, 'ig');;
    // 					if (workConfigFilePath.test(url)) {
    // 						try{
    // 							FS.writeFileSync(url, data);
    // 							context.workspaceState.update('config', data);
    // 						} catch(err) {
    // 							utils.showBarItem(`${CREATER_CONFIG_ERR[1005].errmsg}: ${err}`)
    // 							return
    // 						}
    // 					} else {
    // 						try{
    // 							FS.writeFileSync(url, "");
    // 						}catch(err){
    // 							utils.showBarItem(`${CREATER_CONFIG_ERR[1005].errmsg}: ${err}`)
    // 							return
    // 						}
    // 					}
    // 				})
    // 				utils.showBarItem(CREATER_CONFIG_ERR[1].errmsg)
    // 			}catch(err){
    // 				utils.showBarItem(`${CREATER_CONFIG_ERR[1005].errmsg}: ${err}`)
    // 				return
    // 			}
    // 		} else {
    // 			utils.showBarItem(CREATER_CONFIG_ERR[1003].errmsg)
    // 		}
    // 	} else {
    // 		utils.showBarItem(CREATER_CONFIG_ERR[1002].errmsg);
    // 	}
    // })
}
/**
 * 判断文件夹内有没有测试所需的配置，没有的话给用户选择，并且创建配置文件
 * @param utils 工具函数
 * @param context 上下文
 * @param arg 触发时入参
 * @returns {mdsI18n.checkResType } 检查结果
 */
function checkConfig(utils, context, arg) {
    let res;
    const workPath = utils.getWorkUrl(context, arg);
    if (!workPath) {
        res = constant_1.CREATER_CONFIG_ERR[1001];
        utils.showBarItem(res.errmsg);
        return res;
    }
    const workConfigFilePath = Path.join(workPath, configPath, configName);
    const worksacnFilePath = Path.join(workPath, configPath, scanName);
    const workcheckFilePath = Path.join(workPath, configPath, checkName);
    const workConfigPath = Path.join(workPath, configPath);
    context.workspaceState.update("workPath", workPath);
    context.workspaceState.update("checkPath", workcheckFilePath);
    context.workspaceState.update("scanPath", worksacnFilePath);
    if (!FS.existsSync(workConfigPath)) {
        createrConfig(utils, context, [workConfigFilePath, workcheckFilePath, worksacnFilePath], workConfigPath);
        res = constant_1.CREATER_CONFIG_ERR[0];
    }
    else {
        try {
            const data = FS.readFileSync(configPath, { encoding: "utf8" });
            context.workspaceState.update("config", data);
        }
        catch (err) { }
        res = constant_1.CREATER_CONFIG_ERR[0];
    }
    utils.showBarItem(res.errmsg);
    return res;
}
exports.checkConfig = checkConfig;
function checkUesrJobId(utils, context, callback, value = "") {
    const keyName = "mds.i18n.user.accessKey";
    const result = VSCode.workspace.getConfiguration().get(keyName);
    if (result) {
        callback && callback();
        return true;
    }
    if (!result) {
        utils.showBarItem("缺少阿里工号无法修复");
        VSCode.window
            .showInputBox({
            ignoreFocusOut: true,
            value,
            placeHolder: "请输入阿里工号",
            prompt: "需要阿里工号，才可以完成修复操作(工牌上的号，外包同学也是一样的), 错误的工号将无法发起修复，后续需要变更可以在配置里更改",
        })
            .then(async (res) => {
            if (res) {
                const param = {
                    keyAndValues: {
                        www: "我爱中国",
                    },
                    sourceLang: "zh_CN",
                    targetLangs: ["en_US"],
                    empId: res,
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
                        return true;
                    }
                    else {
                        return false;
                    }
                })
                    .catch((err) => {
                    return false;
                });
                if (data) {
                    await VSCode.workspace
                        .getConfiguration()
                        .update(keyName, res, true);
                    callback && callback();
                }
                else {
                    VSCode.window.showErrorMessage("工号输入错误，请重新输入");
                    checkUesrJobId(utils, context, callback, res);
                }
            }
        });
    }
    return false;
}
exports.checkUesrJobId = checkUesrJobId;
/**
 * 检查核心设置是否缺失，对应的报错和引导也由该函数完成
 * @returns { boolean } false 为缺失
 */
function checkCoreConfig() {
    const accessKey = VSCode.workspace
        .getConfiguration()
        .get("mds.i18n.user.accessKey");
    if (!accessKey) {
        VSCode.window
            .showInformationMessage("没有在项目内发现配置文件，是否自动创建配置文件", ...["确定", "取消"])
            .then((value) => { });
        return false;
    }
    return true;
}
//# sourceMappingURL=config.js.map