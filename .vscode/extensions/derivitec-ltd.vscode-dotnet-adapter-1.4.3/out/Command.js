"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const child_process_1 = require("child_process");
class Command {
    constructor(command, args, _a) {
        var { env } = _a, options = tslib_1.__rest(_a, ["env"]);
        this.childProcess = child_process_1.spawn(command, args, Object.assign(Object.assign({}, options), { env: Object.assign(Object.assign({}, process.env), env) }));
        this.exitCode = new Promise((resolve, reject) => {
            this.childProcess.on('close', resolve);
            this.childProcess.on('error', reject);
            this.exitCodeRelease = resolve;
        });
    }
    onData(handler) {
        this.onStdOut(handler);
        this.onStdErr(handler);
    }
    onStdOut(handler) {
        this.childProcess.stdout.on('data', handler);
    }
    onStdErr(handler) {
        this.childProcess.stderr.on('data', handler);
    }
    dispose() {
        var _a, _b;
        (_a = this.childProcess.stdout) === null || _a === void 0 ? void 0 : _a.removeAllListeners();
        (_b = this.childProcess.stderr) === null || _b === void 0 ? void 0 : _b.removeAllListeners();
        if (!this.childProcess.killed)
            this.childProcess.kill();
        if (this.exitCodeRelease)
            this.exitCodeRelease(-1);
    }
}
exports.default = Command;
//# sourceMappingURL=Command.js.map