"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generator = require("@babel/generator").default;
/**
 * convert ast to code
 * @param {object} ast ast
 * @param {string} sourceCode souce code
 * @param {object} opts config params
 * @return {string} code
 */
function generateCode(ast, sourceCode, opts = {}) {
    return generator(ast, Object.assign({
        compact: false,
        concise: false,
        retainLines: true,
    }, opts), sourceCode).code;
}
// module.exports = generateCode;
exports.default = generateCode;
//# sourceMappingURL=generateCode.js.map