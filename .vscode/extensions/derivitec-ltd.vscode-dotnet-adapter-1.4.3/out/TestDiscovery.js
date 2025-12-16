"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Command_1 = require("./Command");
const vscode = require("vscode");
const path = require("path");
const micromatch_1 = require("micromatch");
const utilities_1 = require("./utilities");
const fs = vscode.workspace.fs;
var DISCOVERY_ERROR;
(function (DISCOVERY_ERROR) {
    DISCOVERY_ERROR["VSTEST_STDERR"] = "DISCOVERY_ERROR: VSTEST_STDERR";
    DISCOVERY_ERROR["SYMBOL_FILE_EMPTY"] = "DISCOVERY_ERROR: SYMBOL_FILE_EMPTY";
})(DISCOVERY_ERROR || (DISCOVERY_ERROR = {}));
;
const uriEquals = (a, b) => Object.entries(a).every(([key, value]) => key.startsWith('_') || value === b[key]);
const hasGrouping = (patterns) => typeof patterns === 'object' && !Array.isArray(patterns);
const removeNodeFromParent = (parent, term, prop = 'id') => {
    if (!parent)
        return;
    const id = parent.children.findIndex(suite => (typeof suite[prop] === 'string' && typeof term === 'string' && suite[prop] === term)
        || (suite[prop] instanceof vscode.Uri && term instanceof vscode.Uri && uriEquals(suite[prop], term)));
    if (id === 0) {
        parent.children.shift();
    }
    else if (id === parent.children.length - 1) {
        parent.children.pop();
    }
    else if (id > -1) {
        parent.children.splice(id, 1);
    }
};
const getTestFile = (file) => file.with({ path: `${file.path}.txt` });
const isFileNotFound = (err) => {
    const errObj = utilities_1.normaliseError(err);
    return ('name' in errObj && errObj.name.startsWith('EntryNotFound')) || errObj.message.indexOf('non-existing file') > -1;
};
class TestDiscovery {
    constructor(workspace, nodeMap, output, configManager, codeLens, testExplorer, log) {
        this.workspace = workspace;
        this.nodeMap = nodeMap;
        this.output = output;
        this.configManager = configManager;
        this.codeLens = codeLens;
        this.testExplorer = testExplorer;
        this.log = log;
        this.loadErrors = new Map();
        this.SuitesInfo = {
            type: 'suite',
            id: 'root',
            label: '.Net Core',
            children: [],
            sourceDll: 'root',
            parent: null,
        };
        this.searchPatterns = [];
        this.loadStatus = this.output.loaded;
    }
    GetNode(id) {
        const node = this.nodeMap.get(id);
        if (!node)
            throw `Test node '${id}' could not be found!`;
        return node;
    }
    Load() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Loading tests (starting)');
            this.nodeMap.forEach(({ node }) => {
                const path = node.sourceDll;
                if (path !== 'root')
                    return this.DetachSuite(path, true);
                removeNodeFromParent(node.parent, node.id);
            });
            this.nodeMap.clear();
            this.SuitesInfo.children.length = 0;
            this.nodeMap.set(this.SuitesInfo.id, { node: this.SuitesInfo });
            this.output.resetLoaded();
            yield this.StopLoading();
            if (Array.isArray(this.watchers) && this.watchers.length > 0) {
                this.watchers.map(watcher => watcher.dispose());
            }
            this.searchPatterns = this.configManager.get('searchpatterns');
            if (hasGrouping(this.searchPatterns)) {
                const groups = {};
                Object.keys(this.searchPatterns).forEach((key) => {
                    const group = {
                        type: 'suite',
                        id: `group:${key}`,
                        label: key,
                        children: [],
                        sourceDll: 'root',
                        parent: this.SuitesInfo,
                    };
                    this.nodeMap.set(group.id, { node: group });
                    this.SuitesInfo.children.push(group);
                    groups[key] = group;
                });
                this.SuiteGroups = groups;
            }
            const patternArr = utilities_1.getPatternArray(this.searchPatterns);
            this.output.update('Searching for tests');
            const files = yield this.LoadFiles(patternArr);
            this.loadStatus.loaded += files.length;
            this.output.update(`Loading tests from ${files.length} files`);
            const stopLoader = this.output.loader();
            for (const file of files) {
                try {
                    this.log.info(`file: ${file.fsPath} (loading)`);
                    yield this.SetTestSuiteInfo(file);
                    this.log.info(`file: ${file.fsPath} (load complete)`);
                }
                catch (e) {
                    this.log.error(e);
                    throw e;
                }
            }
            ;
            stopLoader();
            if (this.loadErrors.size > 0) {
                this.output.update(`Encountered errors in ${this.loadErrors.size} files during loading.`);
                const errArr = Array.from(this.loadErrors.entries());
                if (errArr.some(([file, err]) => err === DISCOVERY_ERROR.VSTEST_STDERR)) {
                    this.output.update(`Some of these errors were encountered by vstest. See ".NET Core Test Output" pane for details.`);
                }
                const emptyErr = errArr.filter(([file, err]) => err === DISCOVERY_ERROR.SYMBOL_FILE_EMPTY);
                if (emptyErr.length > 0) {
                    let err = `The following assemblies produced empty symbol files. If there are test methods in this project, try reloading.\n`;
                    err += emptyErr.map(([file]) => file).join('\n');
                    this.output.update(err);
                }
                this.loadErrors.clear();
            }
            this.watchers = patternArr.map(pattern => this.setupWatcher(pattern));
            if (this.SuitesInfo.children.length == 0) {
                const errorMsg = 'No tests found, check the SearchPattern in the extension settings.';
                this.log.error(errorMsg);
                throw errorMsg;
            }
            this.codeLens.process(this.SuitesInfo);
            this.output.update('Loading tests complete', true);
            this.log.info('Loading tests (complete)');
            return this.SuitesInfo;
        });
    }
    StopLoading() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (typeof this.Loadingtest === 'undefined')
                return;
            this.Loadingtest.childProcess.kill();
            yield this.Loadingtest.exitCode;
        });
    }
    LoadFiles(searchpatterns) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const stopLoader = this.output.loader();
            const skipGlob = this.configManager.get('skippattern');
            let files = [];
            yield Promise.all(searchpatterns.map((pattern) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const findGlob = new vscode.RelativePattern(this.workspace.uri.fsPath, pattern);
                const results = yield vscode.workspace.findFiles(findGlob, skipGlob);
                files.push(...results);
            })));
            stopLoader();
            return files;
        });
    }
    SetTestSuiteInfo(file) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const testListFile = getTestFile(file);
            const testListFileStr = testListFile.fsPath;
            let newFile = false;
            try {
                const cacheStat = yield fs.stat(testListFile);
                const fileStat = yield fs.stat(file);
                if (cacheStat.mtime > fileStat.mtime) {
                    this.loadStatus.addedFromCache += 1;
                    yield this.AddtoSuite(file);
                    return;
                }
            }
            catch (err) {
                if (isFileNotFound(err)) {
                    newFile = true;
                    this.log.debug(`No cache file for ${testListFileStr}`);
                }
                else {
                    this.log.error(`Unable to check for a cache file for ${testListFileStr}; Encountered: ${err}`);
                    this.handleLoadError(file, err);
                }
            }
            let error = false;
            const args = [
                'vstest',
                file.fsPath,
                '/ListFullyQualifiedTests',
                `/ListTestsTargetPath:${testListFileStr}`
            ];
            this.log.debug(`execute: dotnet ${args.join(' ')} (starting)`);
            this.Loadingtest = new Command_1.default('dotnet', args, { cwd: this.workspace.uri.fsPath });
            this.output.connectCommand(this.Loadingtest);
            this.Loadingtest.onStdErr(() => {
                error = true;
            });
            try {
                const code = yield this.Loadingtest.exitCode;
                if (error)
                    throw DISCOVERY_ERROR.VSTEST_STDERR;
                this.log.debug(`execute: dotnet ${args.join(' ')} (complete)`);
                this.Loadingtest = undefined;
                this.log.info(`child process exited with code ${code}`);
                if (newFile)
                    this.loadStatus.addedFromFile += 1;
                else
                    this.loadStatus.updatedFromFile += 1;
                yield this.AddtoSuite(file);
            }
            catch (err) {
                this.log.error(`child process exited with error ${err}`);
                this.handleLoadError(file, err);
                if (this.Loadingtest)
                    this.Loadingtest.dispose();
                this.Loadingtest = undefined;
            }
        });
    }
    AddtoSuite(file) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const fileStr = file.fsPath;
            this.log.info(`suite creation: ${fileStr} (starting)`);
            const testFile = getTestFile(file);
            const output = (yield fs.readFile(testFile)).toString();
            let lines = output.split(/[\n\r]+/);
            const parsedPath = path.parse(fileStr);
            const fileNamespace = parsedPath.base.replace(parsedPath.ext, "");
            const fileSuite = {
                type: "suite",
                id: fileNamespace,
                label: fileNamespace,
                sourceDll: file,
                children: [],
                parent: null,
            };
            for (const line of lines) {
                if (!line) {
                    continue;
                }
                const testArray = line.split('.');
                if (testArray.length < 2)
                    continue;
                const testName = testArray.pop();
                const className = testArray.pop();
                const namespace = line.replace(`.${className}.${testName}`, "");
                const classId = `${namespace}.${className}`;
                let classContext = this.nodeMap.get(classId);
                if (classContext && classContext.node.parent !== fileSuite) {
                    classContext = undefined;
                }
                if (!classContext) {
                    classContext = {
                        node: {
                            type: 'suite',
                            id: classId,
                            label: className,
                            sourceDll: file,
                            children: [],
                            parent: fileSuite,
                        }
                    };
                    this.nodeMap.set(classContext.node.id, classContext);
                    fileSuite.children.push(classContext.node);
                }
                const testInfo = {
                    type: 'test',
                    id: line,
                    description: line,
                    label: testName,
                    sourceDll: file,
                    skipped: false,
                    parent: classContext.node,
                };
                this.loadStatus.added += 1;
                this.log.info(`adding node: ${line}`);
                this.nodeMap.set(testInfo.id, { node: testInfo });
                classContext.node.children.push(testInfo);
            }
            if (!fileSuite.children.length) {
                this.log.info(`suite creation: ${fileStr} was empty (erroring)`);
                throw DISCOVERY_ERROR.SYMBOL_FILE_EMPTY;
            }
            this.log.info(`suite creation: ${fileStr} (complete)`);
            this.AttachSuite(fileSuite);
        });
    }
    GetSuiteGroup(suite) {
        const groupPair = { name: 'root', group: this.SuitesInfo };
        const patterns = this.searchPatterns;
        const filePath = suite.sourceDll;
        if (filePath === 'root') {
            return groupPair;
        }
        if (hasGrouping(patterns) && this.SuiteGroups) {
            const name = Object.keys(patterns).find((groupName) => micromatch_1.isMatch(filePath.fsPath, patterns[groupName]));
            if (!name)
                return groupPair;
            return { name, group: this.SuiteGroups[name] };
        }
        return groupPair;
    }
    AttachSuite(suite) {
        const filePath = suite.sourceDll;
        if (filePath === 'root')
            throw Error('Cannot attach structual suite.');
        const { name: parentName, group: parent } = this.GetSuiteGroup(suite);
        let inserted = false;
        if (this.nodeMap.has(suite.id)) {
            const context = this.nodeMap.get(suite.id);
            if (context.node.parent === parent) {
                this.DetachSuite(filePath);
                const suiteIndex = parent.children.findIndex(childSuite => childSuite.sourceDll !== 'root' && uriEquals(childSuite.sourceDll, filePath));
                if (Number.isFinite(suiteIndex) && suiteIndex > -1) {
                    this.log.info(`replacing node "${suite.id}" in "${parentName}"`);
                    parent.children[suiteIndex] = suite;
                    inserted = true;
                }
            }
            else if (context.node.sourceDll !== 'root') {
                this.log.info(`removing node "${suite.id}" from "${parentName}"`);
                this.DetachSuite(context.node.sourceDll, true);
            }
        }
        if (!inserted) {
            this.log.info(`adding node "${suite.id}" to "${parentName}"`);
            parent.children.push(suite);
        }
        this.nodeMap.set(suite.id, { node: suite });
        suite.parent = parent;
    }
    DetachSuite(file, removeSuite = false) {
        this.nodeMap.forEach((value, key) => {
            if (value.node.sourceDll !== 'root' && uriEquals(value.node.sourceDll, file)) {
                this.nodeMap.delete(key);
                if (removeSuite) {
                    removeNodeFromParent(value.node.parent, file, 'sourceDll');
                }
            }
        });
    }
    setupWatcher(searchPattern) {
        const skipGlob = this.configManager.get('skippattern');
        const watcher = vscode.workspace.createFileSystemWatcher(new vscode.RelativePattern(this.workspace.uri.fsPath, searchPattern));
        const add = (uri) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (micromatch_1.isMatch(uri.fsPath, skipGlob))
                return;
            if (typeof this.Loadingtest !== 'undefined')
                yield this.Loadingtest.exitCode;
            const finish = yield this.testExplorer.load();
            const file = utilities_1.getFileFromPath(uri.fsPath);
            const uriStr = uri.toString();
            this.output.resetLoaded();
            this.loadStatus.loaded += 1;
            try {
                yield this.SetTestSuiteInfo(uri);
                if (this.loadErrors.size > 0 && this.loadErrors.has(uriStr)) {
                    const loadError = this.loadErrors.get(uriStr);
                    let err = `An error occurred while loading ${file}: `;
                    if (loadError === DISCOVERY_ERROR.VSTEST_STDERR) {
                        err += 'See ".NET Core Test Output" pane for details.';
                    }
                    else if (loadError === DISCOVERY_ERROR.SYMBOL_FILE_EMPTY) {
                        err += 'The symbols file produced was empty, are there tests in this project?';
                    }
                    this.output.update(err);
                    this.loadErrors.clear();
                }
                this.codeLens.process(this.SuitesInfo);
                this.output.update(`New tests added from ${uri.fsPath.replace(this.workspace.uri.fsPath, '')}`, true);
                finish.pass(this.SuitesInfo);
            }
            catch (e) {
                finish.fail(e);
            }
        });
        watcher.onDidChange(add);
        watcher.onDidCreate(add);
        watcher.onDidDelete((uri) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (micromatch_1.isMatch(uri.fsPath, skipGlob))
                return;
            const finish = yield this.testExplorer.load();
            this.DetachSuite(uri, true);
            this.output.update(`Removing tests from ${uri.fsPath.replace(this.workspace.uri.fsPath, '')}`, true);
            finish.pass(this.SuitesInfo);
        }));
        return watcher;
    }
    handleLoadError(file, err) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const testListFile = getTestFile(file);
            this.loadErrors.set(file.toString(), err);
            try {
                yield fs.delete(testListFile);
            }
            catch (err) {
                const errObj = utilities_1.normaliseError(err);
                if (isFileNotFound(errObj)) {
                    this.log.error(`Unable to delete ${testListFile.fsPath}: ${errObj.message}`);
                }
            }
        });
    }
    dispose() {
        if (typeof this.Loadingtest !== 'undefined')
            this.Loadingtest.dispose();
    }
}
exports.TestDiscovery = TestDiscovery;
//# sourceMappingURL=TestDiscovery.js.map