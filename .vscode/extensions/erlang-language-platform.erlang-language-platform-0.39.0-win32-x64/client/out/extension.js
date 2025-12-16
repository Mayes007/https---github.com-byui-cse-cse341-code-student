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
exports.deactivate = exports.activate = exports.ELP = void 0;
// Based on the Microsoft template code at https://github.com/Microsoft/vscode-extension-samples
const vscode = require("vscode");
const debugger_1 = require("./debugger");
const commands_1 = require("./commands");
const logging_1 = require("./logging");
const path = require("path");
const node_1 = require("vscode-languageclient/node");
const lspExtensions_1 = require("./lspExtensions");
let client;
exports.ELP = 'elpClient';
function activate(context) {
    const log = (0, logging_1.outputChannel)();
    // Options to control the language server
    const config = vscode.workspace.getConfiguration(exports.ELP);
    let serverPath = config.get("serverPath");
    if (serverPath === "") {
        serverPath = context.asAbsolutePath(path.join('bin', 'elp'));
    }
    const serverArgs = config.get("serverArgs", "server");
    const serverOptions = {
        command: serverPath,
        args: serverArgs.split(" "),
    };
    // Options to control the language client
    const clientOptions = {
        // Register the server for plain text documents
        documentSelector: [{ scheme: 'file', language: 'erlang' }],
        synchronize: {
            // Notify the server about file changes to '.clientrc files contained in the workspace
            fileEvents: vscode.workspace.createFileSystemWatcher('**/.clientrc')
        },
        middleware: {
            // Used to intercept "rename" requests, allowing the user to provide a custom new name
            resolveCodeAction: async (action, token, next) => {
                // The VS Code type definitions still do not take `data` into account, even if that's part of LSP 3.17
                // Therefore, we convert it to a custom type, operate on it and convert it back
                const action317 = action;
                if ('data' in action317) {
                    action317.data = await (0, lspExtensions_1.resolveCodeActionData)(action317.data);
                }
                return next(action, token);
            }
        }
    };
    // Create the language client and start the client.
    client = new node_1.LanguageClient('erlang-elp', 'Erlang Language Platform', serverOptions, clientOptions);
    log.appendLine('Registering commands');
    (0, commands_1.registerCommands)(context, client);
    // Activate the DAP Debugger
    log.appendLine('Activating debugger');
    (0, debugger_1.activateDebugger)(context);
    // Start the client. This will also launch the server
    client.start();
}
exports.activate = activate;
function deactivate() {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map