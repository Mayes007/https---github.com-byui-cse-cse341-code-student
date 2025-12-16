/* @babel/traverse doc:
 * https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md#paths
 */
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const path = require("path");
/**
 * position to put the import without eslint
 * @param {ast} ast code ast
 * @param {boolean} importAst ast for import a from 'b' or const a = require('b')
 * @param {object}  config config from .must
 * @return {number} the position to inject import string
 */
function findLastImportPosition(ast, importAst, config) {
    let isES6 = false;
    let isRelative = false;
    traverse(importAst, {
        ImportDeclaration() {
            isES6 = true;
        },
        StringLiteral(astPath) {
            const { value } = astPath.node;
            if (value.startsWith(config.sourcePath) || value.startsWith("."))
                isRelative = true;
        },
    });
    // node module , push the import as the first one
    if (!isRelative)
        return 0;
    // if relative path module, put import as the last one
    const program = ast.program;
    let position = 0;
    for (let index = program.body.length - 1; index >= 0; index--) {
        const node = program.body[index];
        if (isES6 && node.type === "ImportDeclaration") {
            // import a from 'b'
            position = index + 1;
            break;
        }
        else if (node.type === "VariableDeclaration") {
            // const a = require('b');
            const initializer = node.declarations[0].init;
            if (initializer &&
                initializer.type === "CallExpression" &&
                initializer.callee &&
                initializer.callee.name === "require") {
                position = index + 1;
                break;
            }
        }
    }
    return position;
}
/**
 * generate import ast for injecting into code
 * @param {string} importAst ast for import a from 'b' or const a = require('b')
 * @param {string} filePath target file path
 * @param {object} config config from .must
 * @return {object} ast
 */
function setModulePath(importAst, filePath, config) {
    traverse(importAst, {
        StringLiteral(astPath) {
            if (astPath.shouldSkip)
                return;
            const { value } = astPath.node;
            const isWin = process.platform === "win32";
            const PARENT_SYMBOL = isWin ? "..\\" : "../";
            // console.log(filePath);
            const macroMethodPath = path.parse(value);
            const macroPath = config.macro.path;
            const homeDir = config.sourcePath === "." ? "./" : config.sourcePath;
            const macroDir = macroMethodPath.dir === "." ? "./" : macroMethodPath.dir;
            if (!macroDir.startsWith(homeDir) &&
                !macroDir.startsWith(macroPath) &&
                macroPath !== value)
                return; // not subdirectory of config.sourcePath
            // const relativeFilePath = toRelativePath(filePath, config.cwd);
            const absoluteMacroMethodPath = path.resolve(config.cwd, value);
            let relativePath = path.relative(filePath, absoluteMacroMethodPath); // src/app/index , src/i18n ==> ../../i18n
            const parentFolds = relativePath.split(PARENT_SYMBOL);
            if (parentFolds.length === 2) {
                // ../a => ./
                relativePath = relativePath.replace(PARENT_SYMBOL, "./");
            }
            else if (parentFolds.length > 2) {
                // ../../a => ../
                relativePath = relativePath.replace(PARENT_SYMBOL, "");
            }
            if (isWin)
                relativePath = relativePath.replace(/\\/g, "/");
            astPath.replaceWith(types.stringLiteral(relativePath));
            astPath.skip();
        },
    });
    return importAst;
}
/**
 * position to put the import without eslint
 * @param {ast} ast code ast
 * @param {boolean} importAst ast for import a from 'b' or const a = require('b')
 * @return {number} the position to inject import string
 */
function checkDuplicateDeclaration(ast, importAst) {
    let isDuplicateDeclaration = false;
    const identifierList = [];
    // get i18n Identifier
    traverse(importAst, {
        Identifier(path) {
            const name = path.node.name || "";
            const containerType = path.container.type;
            if (name && containerType !== "CallExpression")
                identifierList.push(name);
        },
    });
    // visiter to find Identifier
    const identifierVisiter = {
        Identifier(path) {
            const name = path.node.name;
            if (identifierList.includes(name)) {
                isDuplicateDeclaration = true;
            }
        },
    };
    // check i18n Identifier whether is used, only check body scope
    traverse(ast, {
        ImportDeclaration(path) {
            path.traverse(identifierVisiter);
        },
        VariableDeclaration(path) {
            if (path.parent.type === "Program") {
                path.traverse(identifierVisiter);
            }
        },
    });
    return isDuplicateDeclaration;
}
module.exports = {
    findLastImportPosition,
    setModulePath,
    checkDuplicateDeclaration,
};
//# sourceMappingURL=macro.js.map