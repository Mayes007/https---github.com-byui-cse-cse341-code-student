"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vscode = require("vscode");
const utilities_1 = require("./utilities");
const QueueManager_1 = require("./QueueManager");
var OP_TYPE;
(function (OP_TYPE) {
    OP_TYPE[OP_TYPE["LOAD"] = 0] = "LOAD";
    OP_TYPE[OP_TYPE["RUN"] = 1] = "RUN";
})(OP_TYPE || (OP_TYPE = {}));
;
const opPriority = [OP_TYPE.RUN, OP_TYPE.LOAD];
class TestExplorer {
    constructor(nodeMap) {
        this.nodeMap = nodeMap;
        this.disposables = [];
        this.testsEmitter = new vscode.EventEmitter();
        this.testStatesEmitter = new vscode.EventEmitter();
        this.autorunEmitter = new vscode.EventEmitter();
        this.queueManager = new QueueManager_1.default(opPriority);
        this.loadState = 'none';
        this.runPool = new Set();
        this.disposables.push(this.testsEmitter, this.testStatesEmitter, this.autorunEmitter, this.queueManager);
    }
    get tests() {
        return this.testsEmitter.event;
    }
    get testStates() {
        return this.testStatesEmitter.event;
    }
    get autorun() {
        return this.autorunEmitter.event;
    }
    get testsRunning() {
        const testsWaiting = this.queueManager.count[OP_TYPE.RUN];
        const testRunning = this.queueManager.currentJob && this.queueManager.currentJob.type === OP_TYPE.RUN;
        return testsWaiting + (testRunning ? 1 : 0);
    }
    load(userInitiated = true) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (userInitiated && this.testsRunning > 0) {
                vscode.window.showErrorMessage(`${this.testsRunning} test${utilities_1.plural(this.testsRunning)} ${utilities_1.plural(this.testsRunning, 'is')} running. Please wait or cancel the test${utilities_1.plural(this.testsRunning)} to refresh test suites.`);
                throw 'Tests are running; Cannot refresh test suites';
            }
            if (userInitiated) {
                this.queueManager.retractSlots(OP_TYPE.LOAD);
                if (this.queueManager.isRunning) {
                    vscode.window.showInformationMessage('Test suites will be refreshed when the current operation has completed.');
                }
            }
            const release = yield this.queueManager.acquireSlot(OP_TYPE.LOAD);
            this.loadState = 'started';
            this.testsEmitter.fire({ type: this.loadState });
            const finish = (data) => {
                this.loadState = 'finished';
                this.testsEmitter.fire(data);
                release();
            };
            return {
                pass: (suite) => finish({ type: 'finished', suite }),
                fail: (errorMessage) => finish({ type: 'finished', errorMessage })
            };
        });
    }
    run(tests) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.testStatesEmitter.fire({ type: 'started', tests });
            tests.forEach(test => this.runPool.add(test));
            const release = yield this.queueManager.acquireSlot(OP_TYPE.RUN);
            return () => {
                tests.forEach(test => this.runPool.delete(test));
                if (this.queueManager.count[OP_TYPE.RUN] === 0) {
                    this.testStatesEmitter.fire({ type: 'finished' });
                }
                release();
            };
        });
    }
    cancelAllRuns() {
        this.queueManager.retractSlots(OP_TYPE.RUN);
        this.runPool.forEach(test => {
            const node = this.nodeMap.get(test);
            if (!node)
                return;
            const { type } = node.node;
            if (type === 'suite') {
                this.updateState({ type: 'suite', suite: test, state: 'completed' });
            }
            else if (type === 'test') {
                this.updateState({ type: 'test', test, state: 'skipped' });
            }
        });
        this.runPool.clear();
        this.testStatesEmitter.fire({ type: 'finished' });
    }
    updateState(event) {
        this.testStatesEmitter.fire(event);
    }
    dispose() {
        this.disposables.forEach(disposable => disposable.dispose());
        this.disposables = [];
    }
}
exports.default = TestExplorer;
//# sourceMappingURL=TestExplorer.js.map