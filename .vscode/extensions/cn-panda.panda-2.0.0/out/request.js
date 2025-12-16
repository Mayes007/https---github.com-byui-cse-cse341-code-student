"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestKeys = exports.requestPulishPack = exports.venusPluginLog = exports.searchResourceByValuesMedusa = exports.submitFixedIssued = exports.insertOrUpdateMcmsByEmpId = exports.uploadExcludeFiles = exports.getRuleResult = exports.getAppRuleList = exports.ignoreOrFalsePositive = void 0;
const utils_1 = require("./utils");
const VSCode = require("vscode");
const axios = require("axios").default;
/**
 * 文案忽略上报
 * @param params
 */
async function ignoreOrFalsePositive(params) {
    let requestParams = [];
    Object.keys(params).forEach((key) => {
        let v = params[key];
        if (v) {
            v = encodeURIComponent(v);
            requestParams.push(`${key}=${v}`);
        }
    });
    let paramStr = "";
    if (requestParams && requestParams.length) {
        paramStr = requestParams.join("&");
    }
    const result = await axios({
        method: "get",
        url: `http://g11n-venus.alibaba-inc.com/issue/dashboard/ignore-or-falsePositive.action?${paramStr}`,
    });
    if (result.status == 200 && result.data && result.data.success) {
        utils_1.default.logToSonarLintOutput("文案忽略上报成功");
    }
    else {
        utils_1.default.logToSonarLintOutput(`文案忽略上报失败,${result.data.message}`);
    }
}
exports.ignoreOrFalsePositive = ignoreOrFalsePositive;
/**
 * 获取引擎规则集
 * @param jsRuleName
 * @returns
 */
async function getRuleResult(ruleName) {
    let ruleResult = await axios({
        method: "get",
        url: `http://g11n-venus.alibaba-inc.com/rule/download-merge.json?ruleName=${ruleName}`,
    });
    if (ruleResult &&
        ruleResult.status == 200 &&
        ruleResult.data &&
        ruleResult.data.content) {
        utils_1.default.logToSonarLintOutput(`获取规则集：${ruleName}成功`);
        return ruleResult.data.content;
    }
    else {
        utils_1.default.logToSonarLintOutput(`获取规则集：${ruleName}失败`);
        return "";
    }
}
exports.getRuleResult = getRuleResult;
/**
 * 插件用获取过滤规则
 * @param repoUrl  git地址
 * @param tenantId 租户ID
 */
async function getAppRuleList(repoUrl, tenantId) {
    // let params =
    //   "repoUrl=" +
    //   encodeURIComponent(repoUrl) +
    //   "&tenantId=" +
    //   encodeURIComponent(tenantId);
    let params = "repoUrl=" + encodeURIComponent(repoUrl);
    const request = await axios({
        method: "get",
        url: `http://g11n-venus.alibaba-inc.com/plugin/app-rule-list.json?${params}`,
    });
    if (request.status == 200 && request.data && request.data.success) {
        let rules = request.data.content || [];
        utils_1.default.logToSonarLintOutput("文案过滤规则获取成功");
        return rules;
    }
    else {
        utils_1.default.logToSonarLintOutput("文案过滤规则获取失败");
        return [];
    }
}
exports.getAppRuleList = getAppRuleList;
/**
 * 插件用提交过滤文件
 * @param params
 */
async function uploadExcludeFiles(params) {
    let ruleContent = params.rules.map((rule) => {
        return { ruleContent: rule, reason: "" };
    });
    let _params = "repoUrl=" +
        encodeURIComponent(params.repoUrl) +
        "&userId=" +
        encodeURIComponent(params.userId);
    const request = await axios({
        method: "post",
        url: `http://g11n-venus.alibaba-inc.com/plugin/exclude-files.json?${_params}`,
        data: ruleContent,
    });
    if (request.status == 200 && request.data && request.data.success) {
        utils_1.default.logToSonarLintOutput("文案过滤规则同步远端成功");
    }
    else {
        utils_1.default.logToSonarLintOutput("文案过滤规则同步远端失败");
    }
}
exports.uploadExcludeFiles = uploadExcludeFiles;
/**
 *
 * @param data
 * @returns
 * {
  "tags": [
    "ggg"
  ],
  "appName": "mds-portal-test3",
  "key": "nnn.dd",
  "remark": "",
  "i18n": [{
      "language": "en_US",
      "value": "nnn.ddhh"
    },
    {
      "language": "zh_CN",
      "value": "nnn.dd"
    },
    {
      "language": "zh_TW",
      "value": ""
    },
    {
      "language": "zh_HK",
      "value": ""
    }
  ],
  "empId": "123123"
}
 */
// TODO:@ 更新文案的接口
async function insertOrUpdateMcmsByEmpId(data) {
    const request = await axios({
        method: "post",
        url: "https://mds-portal.alibaba-inc.com/api/openapi/resource/insertOrUpdateByEmpId",
        data: data,
    });
    if (request &&
        request.status == 200 &&
        request.data &&
        request.data.success) {
        utils_1.default.logToSonarLintOutput(`${data.i18n[0].value}-同步美杜莎成功`);
        return true;
    }
    else {
        let err = request && request.data && request.data.errorDetail;
        utils_1.default.logToSonarLintOutput(`${data.i18n[0].value}-同步美杜莎失败 err:${err}`);
        return false;
    }
}
exports.insertOrUpdateMcmsByEmpId = insertOrUpdateMcmsByEmpId;
/**
 * 插件用提交用户修复缺陷列表
 * @param params
 */
async function submitFixedIssued(params) {
    const request = await axios({
        method: "post",
        url: `http://g11n-venus.alibaba-inc.com/plugin/fixed-issues.json?source=${params.source}`,
        data: params.issues,
    });
    if (request &&
        request.status == 200 &&
        request.data &&
        request.data.success) {
        utils_1.default.logToSonarLintOutput(`文案修复提交到venus成功`);
    }
    else {
        utils_1.default.logToSonarLintOutput(`文案修复提交到venus失败`);
    }
}
exports.submitFixedIssued = submitFixedIssued;
/**
 * 根据value匹配文案
 * @param params
 *
 */
// TODO:@ 查询文案的接口
async function searchResourceByValuesMedusa(params) {
    const request = await axios({
        method: "post",
        url: "https://mds-portal.alibaba-inc.com/api/openapi/resource/searchResourceByValues.json",
        data: params,
    });
    if (request &&
        request.status == 200 &&
        request.data &&
        request.data.success) {
        utils_1.default.logToSonarLintOutput(`根据value查询匹配的文案成功`);
        return request.data.target;
    }
    else {
        utils_1.default.logToSonarLintOutput(`根据value查询匹配的文案失败`);
        return {};
    }
}
exports.searchResourceByValuesMedusa = searchResourceByValuesMedusa;
/**
 *
 * @param params 插件使用统计打点
 */
async function venusPluginLog() {
    const userId = VSCode.workspace
        .getConfiguration()
        .get("mds.i18n.user.accessKey");
    const source = "VSCode";
    const userName = userId;
    let _params = "userId=" +
        encodeURIComponent(userId) +
        "&userName=" +
        encodeURIComponent(userName) +
        "&source=" +
        encodeURIComponent(source);
    let url = `http://g11n-venus.alibaba-inc.com/plugin/log.json?${_params}`;
    try {
        const request = await axios({
            method: "get",
            url: url,
        });
        if (request && request.status && request.data && request.data.success) {
            utils_1.default.logToSonarLintOutput(`插件扫描统计上报成功`);
        }
        else {
            utils_1.default.logToSonarLintOutput(`插件扫描统计上报失败`);
        }
    }
    catch (error) {
        utils_1.default.logToSonarLintOutput(`插件扫描统计上报失败:${error.message}`);
    }
}
exports.venusPluginLog = venusPluginLog;
/** 发布语言包
 * @param packId：number 语言包id
 * @param version: number 语言包版本
 * @param mcmsKeyListString： array ["Ha.Ha_other","TestTheSpecialWordHaha.warehouse"]
 * @param appNames： ["cn-panda"]
 */
async function requestPulishPack(params) {
    let result = await axios({
        method: "post",
        url: `https://pre-cn-panda.cainiao-inc.com/api/pack/publish`,
        data: params,
    });
    console.log('result ==', result);
    if (result
        && result.status === 200
        && typeof result.data === 'object') {
        if (result.data.success) {
            let versionInfo = result.data.data[result.data.data.length - 1];
            let version = Number(versionInfo.version);
            return version;
        }
        else {
            utils_1.default.showBarItem(`🔴语言包发布失败: ${result.data.errMsg}`);
        }
    }
    else {
        utils_1.default.showBarItem(`🔴语言包发布请求失败`);
        console.log('语言包发布请求失败');
        return false;
    }
}
exports.requestPulishPack = requestPulishPack;
/** 术语库接口 查询文案key
 * @param values:['山', '海', '经'],   原始文案 必填
 * @param appName: 'cn-panda',  业务美杜莎名 必填
 * @param sourceLang: 'zh_CN',  原始语种 必填
 * @param targetLangs: ["en_US"],  翻译目标语种(用于阿里翻译) 必填
 * @param empId: 123445,  阿里员工号 必填（empId/email 二选一）
 * @param email: 语言包的业务域，用于生成key，key的后缀 必填（empId/email 二选一）
 * @param buz: 'warehouse', 语言包的业务域，用于生成key，key的后缀 非必填
 */
async function requestKeys(params) {
    let result = await axios({
        method: "post",
        url: `https://pre-cn-panda.cainiao-inc.com/api/term/interact/search`,
        data: params,
    });
    let target = {};
    console.log('requestKeys result == ', result);
    if (result && result.status === 200) {
        if (result.data && result.data.status === 200 && result.data.data && result.data.data.success) {
            target = result.data.data.target || {};
        }
        else {
            utils_1.default.showBarItem(`🔴文案查询失败`);
        }
    }
    else {
        utils_1.default.showBarItem(`🔴文案查询失败`);
    }
    return target;
}
exports.requestKeys = requestKeys;
//# sourceMappingURL=request.js.map