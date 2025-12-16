"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const babylon = require("@babel/parser");
const utils_1 = require("./utils");
/**
 * convert code to ast
 * @param {string} code string
 * @param {Object} babelConfig parse config :https://babeljs.io/docs/en/babel-parser#options
 * @return {object} ast
 */
function _generateAst(code, babelConfig) {
    try {
        return babylon.parse(code, babelConfig);
    }
    catch (error) {
        utils_1.default.logToSonarLintOutput(`AST语法树解析失败： ${error.message} \n at line: ${error.loc.line} , column: ${error.loc.column}`);
        return null;
    }
}
exports.default = _generateAst;
// module.exports = _generateAst;
//# sourceMappingURL=generateASTFile.js.map