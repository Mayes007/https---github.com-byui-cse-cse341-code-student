"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TestResult {
    constructor(_testId, _outcome, _message, _stackTrace) {
        this._testId = _testId;
        this._outcome = _outcome;
        this._message = _message;
        this._stackTrace = _stackTrace;
    }
    get fullName() {
        return this.className + "." + this.method;
    }
    get id() {
        return this._testId;
    }
    get outcome() {
        return this._outcome;
    }
    get message() {
        return this._message;
    }
    get stackTrace() {
        return this._stackTrace;
    }
    matches(className, method) {
        return this.fullName.indexOf(className + "." + method) > -1;
    }
    matchesTheory(className, method) {
        return (this.method.indexOf(`${method}(`) > -1) && this.className.endsWith(className);
    }
    updateName(className, method) {
        this.className = className;
        if (method.startsWith(className)) {
            this.method = method.substring(className.length + 1);
        }
        else {
            this.method = method;
        }
    }
}
exports.TestResult = TestResult;
//# sourceMappingURL=TestResult.js.map