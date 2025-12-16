"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const DebugController_1 = require("./DebugController");
const TestResultsFile_1 = require("./TestResultsFile");
const Command_1 = require("./Command");
const utilities_1 = require("./utilities");
const getMethodName = (fullName) => fullName.substr(fullName.lastIndexOf('.') + 1);
class TestRunner {
    constructor(workspace, nodeMap, output, configManager, log, testExplorer) {
        this.workspace = workspace;
        this.nodeMap = nodeMap;
        this.output = output;
        this.configManager = configManager;
        this.log = log;
        this.testExplorer = testExplorer;
    }
    Run(tests) {
        return this.InnerRun(tests, false);
    }
    Debug(tests) {
        return this.InnerRun(tests, true);
    }
    Cancel() {
        if (this.Runningtest) {
            this.Runningtest.dispose();
            this.Runningtest = undefined;
        }
    }
    InnerRun(tests, isDebug) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                if (this.Runningtest)
                    return;
                this.log.info(`Running tests ${JSON.stringify(tests)}`);
                if (tests[0] == 'root' || tests[0].startsWith('group:')) {
                    let nodeContext = this.nodeMap.get(tests[0]);
                    tests = (_a = nodeContext) === null || _a === void 0 ? void 0 : _a.node.children.map(i => i.id);
                }
                for (const id of tests) {
                    let nodeContext = this.nodeMap.get(id);
                    if (nodeContext) {
                        this.output.update(`${nodeContext.node.id} ${nodeContext.node.type} started`);
                        yield this.RunTest(nodeContext.node, isDebug);
                        this.output.update(`${nodeContext.node.id} ${nodeContext.node.type} complete`);
                    }
                }
            }
            catch (error) {
                this.log.error(error);
            }
        });
    }
    RunTest(node, isDebug) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const debugController = new DebugController_1.DebugController(this.workspace, this.configManager, this.Runningtest, this.log);
            if (node.sourceDll === 'root')
                throw TypeError('Cannot test root suite directly.');
            const testOutputFile = node.sourceDll.with({ path: `${node.sourceDll.path}${utilities_1.getUid()}.trx` });
            const envVars = this.configManager.get('runEnvVars');
            const args = [];
            args.push('vstest');
            args.push(node.sourceDll.fsPath);
            if (!node.sourceDll.fsPath.endsWith(`${node.id}.dll`))
                args.push(`--Tests:${node.id}`);
            args.push('--Parallel');
            args.push(`--logger:trx;LogFileName=${testOutputFile.fsPath}`);
            this.TriggerRunningEvents(node);
            const { print, finish } = this.output.getTestOutputHandler(node.type === 'test' ? getMethodName(node.id) : node.id);
            this.Runningtest = new Command_1.default('dotnet', args, {
                cwd: this.workspace.uri.fsPath,
                env: Object.assign({ "VSTEST_HOST_DEBUG": isDebug ? "1" : "0" }, envVars)
            });
            this.Runningtest.onStdOut((data) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (isDebug) {
                    yield debugController.onData(data);
                }
                print(data.toString());
            }));
            this.Runningtest.onStdErr(data => {
                print(data.toString());
            });
            yield this.Runningtest.exitCode;
            this.Runningtest = undefined;
            finish();
            yield this.ParseTestResults(node, testOutputFile);
            this.MarkSuiteComplete(node);
        });
    }
    MarkSuiteComplete(node) {
        if (node.type == 'test')
            return;
        for (let child of node.children)
            this.MarkSuiteComplete(child);
        const nodeContext = this.nodeMap.get(node.id);
        if (!nodeContext)
            return;
        nodeContext.event = {
            type: 'suite', suite: node.id, state: 'completed'
        };
        this.testExplorer.updateState(nodeContext.event);
    }
    TriggerRunningEvents(node) {
        const nodeContext = this.nodeMap.get(node.id);
        if (!nodeContext)
            return;
        if (node.type == 'suite') {
            nodeContext.event = {
                type: 'suite', suite: node.id, state: 'running'
            };
            this.testExplorer.updateState(nodeContext.event);
            for (let child of node.children)
                this.TriggerRunningEvents(child);
        }
        else {
            nodeContext.event = {
                type: 'test', test: node.id, state: 'running'
            };
            this.testExplorer.updateState(nodeContext.event);
        }
    }
    ParseTestResults(node, testOutputFile) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const results = yield TestResultsFile_1.parseTestResults(testOutputFile);
            const testContexts = this.GetTestsFromNode(node);
            const testContextsMap = new Map(testContexts.map(i => [i.node.id, i]));
            for (const result of results) {
                const testContext = testContextsMap.get(result.fullName);
                if (testContext) {
                    switch (result.outcome) {
                        case "Error":
                            testContext.event = {
                                type: "test",
                                test: testContext.node.id,
                                state: "errored",
                                message: result.stackTrace,
                            };
                            break;
                        case "Failed":
                            testContext.event = {
                                type: "test",
                                test: testContext.node.id,
                                state: "failed",
                                message: result.message,
                            };
                            break;
                        case "Passed":
                            testContext.event = {
                                type: "test",
                                test: testContext.node.id,
                                state: "passed",
                                message: result.message,
                            };
                            break;
                        case "NotExecuted":
                            testContext.event = {
                                type: "test",
                                test: testContext.node.id,
                                state: "skipped"
                            };
                            break;
                        default:
                            this.log.error(`Unknown state encountered where test result outcome was: ${result.outcome}`);
                            break;
                    }
                    if (testContext.event) {
                        this.output.update(`${getMethodName(result.fullName)} test ${testContext.event.state}`);
                        this.testExplorer.updateState(testContext.event);
                    }
                }
            }
        });
    }
    GetTestsFromNode(node) {
        const testContexts = [];
        if (node.type == "suite") {
            for (const child of node.children) {
                const innerContexts = this.GetTestsFromNode(child);
                for (const innerContext of innerContexts) {
                    testContexts.push(innerContext);
                }
            }
        }
        else {
            const context = this.nodeMap.get(node.id);
            testContexts.push(context);
        }
        return testContexts;
    }
}
exports.TestRunner = TestRunner;
//# sourceMappingURL=TestRunner.js.map