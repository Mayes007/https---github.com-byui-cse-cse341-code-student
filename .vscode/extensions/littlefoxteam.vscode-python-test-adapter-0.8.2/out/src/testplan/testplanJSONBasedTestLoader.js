"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestPlanJSONBasedTestLoader = void 0;
const tslib_1 = require("tslib");
const tmp_promise_1 = require("tmp-promise");
const promises_1 = require("fs/promises");
class TestPlanJSONBasedTestLoader {
    constructor(logger, tmpFile) {
        this.logger = logger;
        this.tmpFile = tmpFile;
    }
    static build(logger) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const tmpFile = yield (0, tmp_promise_1.tmpName)({
                prefix: 'testplan-info',
                postfix: '.json',
            });
            return new TestPlanJSONBasedTestLoader(logger, tmpFile);
        });
    }
    getArgs(baseArguments) {
        return ['--info', `json:${this.tmpFile}`].concat(baseArguments);
    }
    parseOutput(_output) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0, promises_1.readFile)(this.tmpFile, 'utf8');
                const metadata = JSON.parse(data, (_, value) => value !== null && value !== void 0 ? value : undefined);
                const parsed = metadata.tests.map((test) => ({
                    type: 'suite',
                    id: test.id,
                    label: test.name,
                    description: test.description,
                    children: test.test_suites.map((suite) => {
                        var _a, _b, _c;
                        return ({
                            type: 'suite',
                            id: suite.id,
                            label: suite.name,
                            description: (_a = suite.description) === null || _a === void 0 ? void 0 : _a.split('\n', 2)[0],
                            tooltip: suite.description,
                            file: (_b = suite.location) === null || _b === void 0 ? void 0 : _b.file,
                            line: (_c = suite.location) === null || _c === void 0 ? void 0 : _c.line_no,
                            children: suite.test_cases.map((tc) => {
                                var _a, _b, _c;
                                return ({
                                    type: 'test',
                                    id: tc.id,
                                    label: tc.name,
                                    description: (_a = tc.description) === null || _a === void 0 ? void 0 : _a.split('\n', 2)[0],
                                    tooltip: tc.description,
                                    file: (_b = tc.location) === null || _b === void 0 ? void 0 : _b.file,
                                    line: (_c = tc.location) === null || _c === void 0 ? void 0 : _c.line_no,
                                });
                            }),
                        });
                    }),
                }));
                return parsed;
            }
            catch (error) {
                this.logger.log('crit', `Discovering testplan tests failed: ${error}`);
                return [];
            }
        });
    }
}
exports.TestPlanJSONBasedTestLoader = TestPlanJSONBasedTestLoader;
//# sourceMappingURL=testplanJSONBasedTestLoader.js.map