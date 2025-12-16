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
exports.command = exports.withErlangInstallationPath = exports.DAP_CONFIG = void 0;
const vscode = require("vscode");
exports.DAP_CONFIG = 'erlangDap';
function withErlangInstallationPath() {
    const dapConfig = vscode.workspace.getConfiguration(exports.DAP_CONFIG);
    const erlangInstallationPath = dapConfig.get('erlangInstallationPath') || '';
    if (erlangInstallationPath != "") {
        const path = (process.env.PATH || '').split(':');
        path.unshift(erlangInstallationPath);
        return path.join(':');
    }
    else {
        return process.env.PATH;
    }
}
exports.withErlangInstallationPath = withErlangInstallationPath;
function command() {
    const dapConfig = vscode.workspace.getConfiguration(exports.DAP_CONFIG);
    return dapConfig.get('command') || '';
}
exports.command = command;
//# sourceMappingURL=dapConfig.js.map