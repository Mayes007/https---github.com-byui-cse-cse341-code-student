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
exports.activateDebugger = exports.DEBUG_TYPE = void 0;
const vscode = require("vscode");
const dapConfig = require("./dapConfig");
exports.DEBUG_TYPE = 'erlang-edb';
function activateDebugger(context) {
    const factory = new DebugAdapterExecutableFactory(context.extensionUri);
    context.subscriptions.push(vscode.debug.registerDebugAdapterDescriptorFactory(exports.DEBUG_TYPE, factory));
}
exports.activateDebugger = activateDebugger;
class DebugAdapterExecutableFactory {
    constructor(extensionUri) {
        this.extensionUri = extensionUri;
    }
    createDebugAdapterDescriptor(_session, executable) {
        let command;
        let args;
        const commandString = dapConfig.command();
        if (commandString.length > 0) {
            command = commandString.split(' ')[0];
            args = commandString.split(' ').slice(1);
        }
        else {
            command = vscode.Uri.joinPath(this.extensionUri, 'bin', 'edb').fsPath;
            args = ['dap'];
        }
        const options = { env: { "PATH": dapConfig.withErlangInstallationPath() } };
        executable = new vscode.DebugAdapterExecutable(command, args, options);
        return executable;
    }
}
//# sourceMappingURL=debugger.js.map