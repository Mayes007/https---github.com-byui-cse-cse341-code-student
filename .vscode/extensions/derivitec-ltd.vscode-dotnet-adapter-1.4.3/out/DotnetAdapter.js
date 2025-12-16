"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const TestDiscovery_1 = require("./TestDiscovery");
const TestRunner_1 = require("./TestRunner");
const OutputManager_1 = require("./OutputManager");
const CodeLensProcessor_1 = require("./CodeLensProcessor");
const TestExplorer_1 = require("./TestExplorer");
const ConfigManager_1 = require("./ConfigManager");
class DotnetAdapter {
    constructor(workspace, log) {
        this.workspace = workspace;
        this.log = log;
        this.disposables = [];
        this.nodeMap = new Map();
        this.outputManager = new OutputManager_1.default();
        this.testExplorer = new TestExplorer_1.default(this.nodeMap);
        this.log.info('Initializing .Net Core adapter');
        this.log.info('');
        this.configManager = new ConfigManager_1.ConfigManager(this.workspace, this.log);
        this.codeLensProcessor = new CodeLensProcessor_1.default(this.outputManager, this.configManager, this.testExplorer);
        this.testDiscovery = new TestDiscovery_1.TestDiscovery(this.workspace, this.nodeMap, this.outputManager, this.configManager, this.codeLensProcessor, this.testExplorer, this.log);
        this.testRunner = new TestRunner_1.TestRunner(this.workspace, this.nodeMap, this.outputManager, this.configManager, this.log, this.testExplorer);
        this.configManager.addWatcher('searchpatterns', () => {
            this.log.info('Sending reload event');
            this.load();
        });
        this.disposables.push(this.testExplorer, this.codeLensProcessor, this.configManager);
    }
    get tests() {
        return this.testExplorer.tests;
    }
    get testStates() {
        return this.testExplorer.testStates;
    }
    get autorun() {
        return this.testExplorer.autorun;
    }
    load() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const finish = yield this.testExplorer.load();
            try {
                const suite = yield this.testDiscovery.Load();
                finish.pass(suite);
            }
            catch (error) {
                finish.fail(error);
            }
        });
    }
    run(tests) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const finish = yield this.testExplorer.run(tests);
            yield this.testRunner.Run(tests);
            finish();
        });
    }
    debug(tests) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const finish = yield this.testExplorer.run(tests);
            yield this.testRunner.Debug(tests);
            finish();
        });
    }
    cancel() {
        this.testRunner.Cancel();
        this.testExplorer.cancelAllRuns();
    }
    dispose() {
        this.testRunner.Cancel();
        for (const disposable of this.disposables) {
            disposable.dispose();
        }
        this.disposables = [];
    }
}
exports.DotnetAdapter = DotnetAdapter;
//# sourceMappingURL=DotnetAdapter.js.map