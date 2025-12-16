"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MACRO_VAR_REPLACE_REG = exports.DEFAULT_HTML_RULE = exports.DEFAULT_JAVASCRIPT_RULE = exports.CREATER_CONFIG_ERR = void 0;
const CREATER_CONFIG_ERR = {
    0: {
        code: 0,
        errmsg: "",
    },
    1: {
        code: 1,
        errmsg: "配置创建成功，请重新发起扫描",
    },
    1001: {
        code: 1001,
        errmsg: "项目文件夹查找错误",
    },
    1002: {
        code: 1002,
        errmsg: "缺少配置文件无法扫描",
    },
    1003: {
        code: 1003,
        errmsg: "未发现配置模版，无法创建配置文件",
    },
    1004: {
        code: 1004,
        errmsg: "模版信息读取失败",
    },
    1006: {
        code: 1006,
        errmsg: "模版内容有误",
    },
    1005: {
        code: 1005,
        errmsg: "配置文件创建失败",
    },
    9999: {
        code: 9999,
        errmsg: "未知错误",
    },
};
exports.CREATER_CONFIG_ERR = CREATER_CONFIG_ERR;
const DEFAULT_JAVASCRIPT_RULE = ":icbu:javascript-ext.venus";
exports.DEFAULT_JAVASCRIPT_RULE = DEFAULT_JAVASCRIPT_RULE;
const DEFAULT_HTML_RULE = ":icbu:html-ext.venus";
exports.DEFAULT_HTML_RULE = DEFAULT_HTML_RULE;
const MACRO_VAR_REPLACE_REG = /(\$variable\$)/;
exports.MACRO_VAR_REPLACE_REG = MACRO_VAR_REPLACE_REG;
//# sourceMappingURL=constant.js.map