"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const traverse = require("@babel/traverse").default;
const generator = require("@babel/generator").default;
const babylon = require("@babel/parser");
/**
 * replace { with \\{
 * @param {string} text text
 * @return {string} new text
 */
/* function escapeCurlyBrackets(text) {
  return text.replace(/(?<!\\)[{|}]/, '\\\\$&');
} */
function generateVariableFromExpression(expression) {
    const tmpCode = "a";
    const ast = babylon.parse(tmpCode);
    traverse(ast, {
        ExpressionStatement(path) {
            path.node.expression = expression;
        },
    });
    let value = generator(ast, { concise: true }, tmpCode).code;
    value = value.replace(/;$/g, "");
    let words = value.split(/[^a-zA-Z]/i);
    words = words
        .filter((w) => /^[\w|\d]+$/i.test(w))
        .map((w, index) => {
        if (index === 0)
            return w;
        return w.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
    });
    const key = words.slice(0, 3).join("");
    return {
        key,
        value,
    };
}
function avoidDuplicate(key, variable) {
    const dupKeys = variable.filter((v) => {
        return v.split("_")[0] === key;
    });
    if (dupKeys > 0) {
        return `${key}_${dupKeys.length}`;
    }
    return key;
}
function fromES6Template(path, placeholder) {
    const node = path.node;
    const expressions = node.expressions || [];
    const quasis = node.quasis || [];
    const variable = [];
    const tmp = quasis.map((q, index) => {
        const expression = expressions[index];
        const variableObject = generateVariableFromExpression(expression);
        if (!variableObject.key) {
            return q.value.raw;
        }
        const key = avoidDuplicate(variableObject.key, variable);
        variable.push(`${key}:${variableObject.value}`);
        return q.value.raw + (expression ? placeholder(key) : "");
    });
    return { tmp: tmp.join(""), variable };
}
function fromJSXText(path, placeholder) {
    const node = path.node;
    const expressions = node.children || [];
    const variable = [];
    const tmp = expressions.map((expression) => {
        let str = "";
        if (expression.type === "JSXText")
            str = expression.value;
        else if (expression.type === "JSXExpressionContainer") {
            const variableObject = generateVariableFromExpression(expression.expression);
            if (variableObject.key) {
                const key = avoidDuplicate(variableObject.key, variable);
                str = placeholder(key);
                variable.push(`${key}:${variableObject.value}`);
            }
        }
        return str;
    });
    return { tmp: tmp.join("").trim(), variable };
}
// module.exports = {
//   fromES6Template,
//   fromJSXText,
// };
exports.default = {
    fromES6Template,
    fromJSXText,
};
//# sourceMappingURL=generateTemplate.js.map