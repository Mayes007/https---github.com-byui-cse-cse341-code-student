"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const babylon = require("@babel/parser");
const VSCode = require("vscode");
const utils_1 = require("./utils");
const Path = require("path");
const { findLastImportPosition, setModulePath, checkDuplicateDeclaration, } = require("./macro");
/**
 * inject import to code
 * @param {object} ast code ast
 * @param {string} filePath current file path
 * @param {object} config config from .must
 * @return {object} ast
 */
function injectDependency(ast, filePath) {
    const program = ast.program;
    //   const importSyntax = macro.import;
    const importSyntax = VSCode.workspace
        .getConfiguration()
        .get("mds.i18n.mcms.util");
    if (!importSyntax) {
        utils_1.default.showBarItem(`🔴用户配置项中缺少依赖的i18n工具包，请先配置，比如 import $i18n from "alife/panda-i18n"`);
        utils_1.default.logToSonarLintOutput('🔴用户配置项中缺少依赖的i18n工具包，请先配置，比如 import $i18n from "alife/panda-i18n"');
        return;
    }
    let importAst;
    try {
        importAst = babylon.parse(importSyntax, {
            allowImportExportEverywhere: true,
        });
    }
    catch (e) {
        utils_1.default.logToSonarLintOutput(e);
        utils_1.default.logToSonarLintOutput("Import syntax {importSyntax} is not correct");
        throw new Error("HANDLED ERROR"); // interrupt process
    }
    const isDuplicateDeclaration = checkDuplicateDeclaration(ast, importAst);
    let sourcePath = Path.basename(filePath);
    if (!isDuplicateDeclaration) {
        const importPosition = findLastImportPosition(ast, importAst, {
            sourcePath: sourcePath,
        });
        program.body.splice(importPosition, 0, ...importAst.program.body);
    }
    return ast;
}
// module.exports = injectDependence;
exports.default = injectDependency;
//# sourceMappingURL=injectDependency.js.map