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
exports.outputChannel = void 0;
const vscode = require("vscode");
let log;
function outputChannel() {
    if (log == undefined) {
        log = vscode.window.createOutputChannel('Erlang ELP');
    }
    return log;
}
exports.outputChannel = outputChannel;
//# sourceMappingURL=logging.js.map