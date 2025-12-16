"use strict";
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is dual-licensed under either the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree or the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree. You may select, at your option, one of the
 * above-listed licenses.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Based on the Microsoft template code at https://github.com/Microsoft/vscode-extension-samples
const vscode = require("vscode");
const assert = require("assert");
const helper_1 = require("./helper");
suite('Should do completion', () => {
    const docUri = (0, helper_1.getDocUri)('completion.txt');
    test('Completes JS/TS in txt file', async () => {
        await testCompletion(docUri, new vscode.Position(0, 0), {
            items: [
                { label: 'JavaScript', kind: vscode.CompletionItemKind.Text },
                { label: 'TypeScript', kind: vscode.CompletionItemKind.Text }
            ]
        });
    });
});
async function testCompletion(docUri, position, expectedCompletionList) {
    await (0, helper_1.activate)(docUri);
    // Executing the command `vscode.executeCompletionItemProvider` to simulate triggering completion
    const actualCompletionList = (await vscode.commands.executeCommand('vscode.executeCompletionItemProvider', docUri, position));
    assert.ok(actualCompletionList.items.length >= 2);
    expectedCompletionList.items.forEach((expectedItem, i) => {
        const actualItem = actualCompletionList.items[i];
        assert.equal(actualItem.label, expectedItem.label);
        assert.equal(actualItem.kind, expectedItem.kind);
    });
}
//# sourceMappingURL=completion.test.js.map