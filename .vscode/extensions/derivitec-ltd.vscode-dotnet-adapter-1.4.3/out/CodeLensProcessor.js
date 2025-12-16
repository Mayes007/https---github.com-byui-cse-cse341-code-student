"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vscode = require("vscode");
const getOmnisharp = () => vscode.extensions.getExtension('ms-dotnettools.csharp');
class CodeLensProcessor {
    constructor(output, configManager, testExplorer) {
        this.output = output;
        this.configManager = configManager;
        this.testExplorer = testExplorer;
        this.disposables = [];
        this.waiting = false;
        this.ready = false;
        this.cancel = false;
        if (this.configManager.get('codeLens')) {
            this.setupOnOmnisharpReady();
        }
        else {
            this.output.update('CodeLens integration deactivated. Change the codeLens setting if you wish to activate.');
        }
        this.disposables.push(this.configManager.addWatcher('codeLens', (newValue) => {
            if (newValue === true && !this.waiting && !this.ready) {
                this.setupOnOmnisharpReady();
                return;
            }
            this.output.update('CodeLens integration was previously activated and is already in progress.');
        }));
    }
    setupOnOmnisharpReady() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.waiting = true;
            yield this.monitorOmnisharpInitialisation();
            this.waiting = false;
            try {
                this.ready = true;
                const suite = this.deferredSuite;
                this.deferredSuite = undefined;
                if (suite)
                    this.process(suite);
            }
            catch (e) {
                this.handleError(e);
            }
        });
    }
    monitorOmnisharpInitialisation() {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let omnisharp = getOmnisharp();
            if (!omnisharp) {
                this.output.update('C# extension is not installed. Install and enable to apply additional CodeLens information to tests.');
                yield this.waitForInstallation();
                this.processCancel();
                omnisharp = getOmnisharp();
            }
            if (omnisharp && !omnisharp.isActive) {
                this.output.update('C# extension is installed, but not yet active. Waiting for activation...');
                yield this.waitForActivation();
                this.processCancel();
                omnisharp = getOmnisharp();
            }
            if (((_a = omnisharp) === null || _a === void 0 ? void 0 : _a.isActive) && 'initializationFinished' in omnisharp.exports && typeof omnisharp.exports.initializationFinished === 'function') {
                this.output.update('Waiting for Omnisharp to complete initialisation. This can take several minutes.');
                yield omnisharp.exports.initializationFinished();
                this.processCancel();
                this.output.update('Omnisharp initialisation completed');
                return;
            }
            throw 'An unexpected error occurred while processing CodeLens information.';
        });
    }
    waitForInstallation() {
        return new Promise((resolve) => {
            vscode.extensions.onDidChange(() => {
                if (getOmnisharp())
                    resolve();
            });
        });
    }
    waitForActivation() {
        return new Promise((resolve) => {
            const intervalUid = setInterval(() => {
                const omnisharp = getOmnisharp();
                if (omnisharp && omnisharp.isActive) {
                    clearInterval(intervalUid);
                    resolve();
                }
            }, 10000);
        });
    }
    process(suite) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const finish = yield this.testExplorer.load(false);
            if (!this.ready) {
                this.deferredSuite = suite;
                finish.pass(suite);
                return;
            }
            this.output.update('Processing CodeLens data');
            const stopLoader = this.output.loader();
            try {
                yield Promise.all(suite.children.map(this.processItem.bind(this)));
                finish.pass(suite);
                stopLoader();
                this.output.update('CodeLens symbols updated');
            }
            catch (e) {
                finish.fail(e);
                stopLoader();
                this.handleError(e);
            }
        });
    }
    processItem(item) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const symbols = yield vscode.commands.executeCommand('vscode.executeWorkspaceSymbolProvider', item.label);
            this.processCancel();
            if (symbols.length > 0) {
                const symbol = symbols[0];
                item.file = symbol.location.uri.fsPath;
                item.line = symbol.location.range.start.line;
            }
            if ('children' in item && item.children.length > 0)
                yield Promise.all(item.children.map(this.processItem.bind(this)));
        });
    }
    processCancel() {
        if (this.cancel)
            throw 'Processing cancelled.';
    }
    handleError(err) {
        this.output.update(`[CodeLens] Error: ${err}`);
    }
    dispose() {
        this.cancel = true;
        for (const disposable of this.disposables) {
            disposable.dispose();
        }
        this.disposables = [];
    }
}
exports.default = CodeLensProcessor;
//# sourceMappingURL=CodeLensProcessor.js.map