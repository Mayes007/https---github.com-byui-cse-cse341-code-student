"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vscode = require("vscode");
const xmldom_1 = require("xmldom");
const TestResult_1 = require("./TestResult");
const fs = vscode.workspace.fs;
function findChildElement(node, name) {
    let child = node.firstChild;
    while (child) {
        if (child.nodeName === name) {
            return child;
        }
        child = child.nextSibling;
    }
    return null;
}
function getAttributeValue(node, name) {
    const attribute = node.attributes.getNamedItem(name);
    return (attribute === null) ? null : attribute.nodeValue;
}
function getTextContentForTag(parentNode, tagName) {
    const node = parentNode.getElementsByTagName(tagName);
    return node.length > 0 ? node[0].textContent : "";
}
function parseUnitTestResults(xml) {
    const results = [];
    const nodes = xml.getElementsByTagName("UnitTestResult");
    for (let i = 0; i < nodes.length; i++) {
        results.push(new TestResult_1.TestResult(getAttributeValue(nodes[i], "testId"), getAttributeValue(nodes[i], "outcome"), getTextContentForTag(nodes[i], "Message"), getTextContentForTag(nodes[i], "StackTrace")));
    }
    return results;
}
function updateUnitTestDefinitions(xml, results) {
    const nodes = xml.getElementsByTagName("UnitTest");
    const names = new Map();
    for (let i = 0; i < nodes.length; i++) {
        const id = getAttributeValue(nodes[i], "id");
        const testMethod = findChildElement(nodes[i], "TestMethod");
        if (testMethod) {
            names.set(id, {
                className: getAttributeValue(testMethod, "className"),
                method: getAttributeValue(testMethod, "name"),
            });
        }
    }
    for (const result of results) {
        const name = names.get(result.id);
        if (name) {
            result.updateName(name.className, name.method);
        }
    }
}
const parseTestResults = (fileUri) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let results;
    const data = (yield fs.readFile(fileUri)).toString();
    const xdoc = new xmldom_1.DOMParser().parseFromString(data, "application/xml");
    results = parseUnitTestResults(xdoc.documentElement);
    updateUnitTestDefinitions(xdoc.documentElement, results);
    try {
        yield fs.delete(fileUri);
    }
    catch (_a) { }
    return results;
});
exports.parseTestResults = parseTestResults;
//# sourceMappingURL=TestResultsFile.js.map