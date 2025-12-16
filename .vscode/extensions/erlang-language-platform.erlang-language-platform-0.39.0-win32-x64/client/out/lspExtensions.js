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
exports.resolveCodeActionData = exports.defaultValue = exports.isValid = exports.UserInputType = void 0;
const vscode = require("vscode");
// Resolve Code Actions
var UserInputType;
(function (UserInputType) {
    UserInputType["Atom"] = "Atom";
    UserInputType["Variable"] = "Variable";
    UserInputType["String"] = "String";
})(UserInputType = exports.UserInputType || (exports.UserInputType = {}));
;
function isValid(input_type, value) {
    switch (input_type) {
        case UserInputType.Atom:
            return (/^[a-z][_a-zA-Z0-9@]*$/.test(value) || /^['][_a-zA-Z0-9@]*[']$/.test(value));
        case UserInputType.Variable:
            return /^[A-Z][_a-zA-Z0-9@]*$/.test(value);
        case UserInputType.String:
            return true;
    }
}
exports.isValid = isValid;
function defaultValue(input_type) {
    switch (input_type) {
        case UserInputType.Atom:
            return 'new_name';
        case UserInputType.Variable:
            return 'NewName';
        case UserInputType.String:
            return 'New String';
    }
}
exports.defaultValue = defaultValue;
async function resolveCodeActionData(data) {
    if ('userInput' in data) {
        data.userInput.value = await vscode.window.showInputBox({
            value: data.userInput.value ?? defaultValue(data.userInput.input_type),
            prompt: data.userInput.prompt ?? '',
            validateInput: value => {
                if (isValid(data.userInput.input_type, value)) {
                    return null;
                }
                return `Invalid name for Erlang type '${data.userInput.input_type}'`;
            },
        });
    }
    return data;
}
exports.resolveCodeActionData = resolveCodeActionData;
//# sourceMappingURL=lspExtensions.js.map