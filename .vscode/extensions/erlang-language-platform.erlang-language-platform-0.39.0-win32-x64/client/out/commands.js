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
exports.debugSingle = exports.buildTask = exports.createTask = exports.runSingle = exports.registerCommands = void 0;
const vscode = require("vscode");
const dapConfig = require("./dapConfig");
const edbDebugger = require("./debugger");
function registerCommands(context, client) {
    context.subscriptions.push(vscode.commands.registerCommand('elp.runSingle', async (runnable) => {
        await runSingle(runnable);
    }), vscode.commands.registerCommand('elp.debugSingle', async (runnable) => {
        await debugSingle(runnable);
    }), vscode.commands.registerCommand('elp.restartServer', async () => {
        await client.restart();
    }));
}
exports.registerCommands = registerCommands;
function runSingle(runnable) {
    const task = createTask(runnable);
    task.group = vscode.TaskGroup.Build;
    task.presentationOptions = {
        reveal: vscode.TaskRevealKind.Always,
        panel: vscode.TaskPanelKind.Dedicated,
        clear: true,
    };
    const command = [runnable.args.command, ...runnable.args.args].join(' ');
    return vscode.tasks.executeTask(task);
}
exports.runSingle = runSingle;
function createTask(runnable) {
    const command = runnable.kind;
    const args = [runnable.args.command, ...runnable.args.args];
    const definition = {
        type: runnable.kind,
        command,
        args,
        cwd: runnable.args.workspaceRoot,
        env: { "PATH": dapConfig.withErlangInstallationPath() },
    };
    const task = buildTask(definition, runnable.label, command, args);
    task.presentationOptions.clear = true;
    task.presentationOptions.focus = false;
    return task;
}
exports.createTask = createTask;
function buildTask(definition, name, command, args) {
    const task_source = 'elp';
    const exec = new vscode.ProcessExecution(command, args, definition);
    return new vscode.Task(definition, vscode.TaskScope.Workspace, name, task_source, exec, []);
}
exports.buildTask = buildTask;
async function debugSingle(runnable) {
    const debugConfiguration = {
        type: edbDebugger.DEBUG_TYPE,
        name: 'Erlang EDB',
        request: 'launch',
        runInTerminal: {
            kind: "integrated",
            cwd: "${workspaceFolder}",
            args: ["bash", "-c", "rebar3 as test shell --eval \"$EDB_DAP_NODE_INIT, $REBAR3_SHELL_CT_RUN_CMD\""],
            env: {
                REBAR3_SHELL_CT_RUN_CMD: `gen_server:cast(self(), {cmd, default, ct, \"${runnable.args.args.join(" ")}\"})`,
                "PATH": dapConfig.withErlangInstallationPath(),
            },
            argsCanBeInterpretedByShell: false,
        },
        config: {
            nameDomain: "shortnames",
            nodeInitCodeInEnvVar: "EDB_DAP_NODE_INIT",
            timeout: 60,
        },
    };
    await vscode.debug.startDebugging(undefined, debugConfiguration);
}
exports.debugSingle = debugSingle;
//# sourceMappingURL=commands.js.map