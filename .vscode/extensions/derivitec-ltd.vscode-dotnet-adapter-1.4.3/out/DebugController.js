"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vscode = require("vscode");
class DebugController {
    constructor(workspace, configManager, Runningtest, log) {
        this.workspace = workspace;
        this.configManager = configManager;
        this.Runningtest = Runningtest;
        this.log = log;
        this.processIdRegexp = /Process Id: (.*),/gm;
        this.debugProcesses = {};
    }
    onData(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const match = this.processIdRegexp.exec(data);
            if (match && match[1]) {
                const processId = match[1];
                let debugProcess = this.debugProcesses[processId];
                if (!debugProcess) {
                    debugProcess = {
                        processId: processId,
                        config: [
                            {
                                name: '.NET Core Attach',
                                type: 'coreclr',
                                request: 'attach',
                                processId: processId,
                            },
                        ],
                    };
                    if (this.configManager.get('attachCpp')) {
                        debugProcess.config.push({
                            "name": "(gdb) Attach",
                            "type": "cppdbg",
                            "request": "attach",
                            "program": "/usr/share/dotnet/dotnet",
                            "processId": processId,
                            "MIMode": "gdb",
                            "setupCommands": [
                                {
                                    "description": "Enable pretty-printing for gdb",
                                    "text": "-enable-pretty-printing",
                                    "ignoreFailures": true
                                }
                            ]
                        });
                    }
                    this.debugProcesses[processId] = debugProcess;
                    const configs = debugProcess.config;
                    const buffers = yield Promise.all(configs.map(config => vscode.debug.startDebugging(this.workspace, config)));
                    buffers.forEach(buffer => this.log.info(buffer.toString()));
                    setTimeout(() => {
                        vscode.commands.executeCommand("workbench.action.debug.continue");
                    }, 1000);
                    const currentSession = vscode.debug.activeDebugSession;
                    if (!currentSession) {
                        this.log.error('No active debug session - aborting');
                        if (this.Runningtest && this.Runningtest.childProcess.stdin)
                            this.Runningtest.childProcess.stdin.write('Done\n');
                        return;
                    }
                    const subscription = vscode.debug.onDidTerminateDebugSession((session) => {
                        if (currentSession != session)
                            return;
                        if (this.Runningtest && this.Runningtest.childProcess.stdin)
                            this.Runningtest.childProcess.stdin.write('Done\n');
                        this.log.info('Debug session ended');
                        subscription.dispose();
                    });
                }
            }
        });
    }
}
exports.DebugController = DebugController;
//# sourceMappingURL=DebugController.js.map