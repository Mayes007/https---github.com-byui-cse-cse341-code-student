"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTestSuites = exports.TestplanPatternBasedTestLoader = void 0;
const tslib_1 = require("tslib");
class TestplanPatternBasedTestLoader {
    getArgs(baseArguments) {
        return ['--info', 'pattern-full'].concat(baseArguments);
    }
    parseOutput(output) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return parseTestSuites(output);
        });
    }
}
exports.TestplanPatternBasedTestLoader = TestplanPatternBasedTestLoader;
var TestObjectType;
(function (TestObjectType) {
    TestObjectType[TestObjectType["APP"] = 0] = "APP";
    TestObjectType[TestObjectType["SUITE"] = 1] = "SUITE";
    TestObjectType[TestObjectType["TEST"] = 2] = "TEST";
})(TestObjectType || (TestObjectType = {}));
function parseTestSuites(content) {
    const suites = [];
    const parentStack = [];
    content
        .split(/[\r\n]+/)
        .map((line) => line.trim())
        .filter((line) => line)
        .map((line) => line)
        .forEach((line) => {
        const data = line.split(/:+/);
        const testRank = data.length - 1;
        while (testRank < parentStack.length) {
            parentStack.pop();
        }
        switch (testRank) {
            case TestObjectType.APP: {
                const appSuite = newTestSuite(data, testRank);
                parentStack.push(appSuite);
                suites.push(appSuite);
                break;
            }
            case TestObjectType.SUITE: {
                const suite = newTestSuite(data, testRank);
                parentStack[parentStack.length - 1].children.push(suite);
                parentStack.push(suite);
                break;
            }
            case TestObjectType.TEST: {
                const test = newTest(data);
                parentStack[parentStack.length - 1].children.push(test);
                break;
            }
        }
    });
    return suites;
}
exports.parseTestSuites = parseTestSuites;
function newTest(data) {
    return {
        type: 'test',
        id: data.join(':'),
        label: data[TestObjectType.TEST],
    };
}
function newTestSuite(data, testRank) {
    return {
        type: 'suite',
        id: data.join(':'),
        label: data[testRank],
        children: [],
    };
}
//# sourceMappingURL=testplanPatternsBasedTestLoader.js.map