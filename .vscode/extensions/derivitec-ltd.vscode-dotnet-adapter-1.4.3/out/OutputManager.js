"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const utilities_1 = require("./utilities");
const loadedDefault = () => ({
    loaded: 0,
    added: 0,
    addedFromCache: 0,
    updatedFromFile: 0,
    addedFromFile: 0,
});
class OutputManager {
    constructor() {
        this.internalLoaded = loadedDefault();
        this.canAppend = true;
        this.log = [];
        this.summaryChannel = vscode.window.createOutputChannel('.Net Core Test Summary');
        this.outputChannel = vscode.window.createOutputChannel('.Net Core Test Output');
        this.refresh();
    }
    get loaded() {
        const obj = {};
        const keys = Object.keys(this.internalLoaded);
        keys.forEach(key => Object.defineProperty(obj, key, {
            get: () => this.internalLoaded[key],
            set: (value) => {
                this.canAppend = false;
                this.internalLoaded[key] = value;
            }
        }));
        return obj;
    }
    update(status, summarise = false) {
        let logItem;
        if (status) {
            logItem = `[${utilities_1.getDate()}] ${status}`;
            if (summarise)
                logItem += ` ${this.summarise()}`;
            this.log.push(logItem);
            if (this.canAppend)
                return this.summaryChannel.appendLine(logItem);
        }
        if (!this.canAppend)
            this.refresh();
        this.canAppend = true;
    }
    refresh() {
        const { loaded, added, addedFromCache, addedFromFile, updatedFromFile } = this.internalLoaded;
        this.summaryChannel.clear();
        this.summaryChannel.appendLine(`Loaded ${loaded} test file${utilities_1.plural(loaded)}
Added ${added} test${utilities_1.plural(added)} to the test suite
    ${addedFromFile} new test file${utilities_1.plural(addedFromFile)}
    ${addedFromCache} cached test file${utilities_1.plural(addedFromCache)}
    ${updatedFromFile} test file${utilities_1.plural(updatedFromFile)} updated since last cache

${this.log.join('\n')}`);
    }
    summarise() {
        const { loaded, added, addedFromCache, addedFromFile, updatedFromFile } = this.internalLoaded;
        const breakdown = { 'new': addedFromFile, 'cached': addedFromCache, 'updated': updatedFromFile };
        return `${added} tests from ${loaded} files; ${utilities_1.objToListSentence(breakdown)}`;
    }
    loader() {
        let initialLength = this.log.length;
        const message = this.log[initialLength - 1];
        const uid = setInterval(() => {
            if (this.log.length !== initialLength) {
                this.refresh();
                this.summaryChannel.appendLine(`Still running -> ${message}`);
                initialLength = this.log.length;
            }
            this.canAppend = false;
            this.summaryChannel.append('.');
        }, 1000);
        return () => {
            clearInterval(uid);
            this.canAppend = false;
            this.summaryChannel.append('Complete.');
        };
    }
    getTestOutputHandler(id) {
        this.update(`${id} running`);
        const stopLoader = this.loader();
        this.outputChannel.show(true);
        this.outputChannel.appendLine(`[${new Date().toISOString()}] Test output for ${id} begins...`);
        return {
            print: (...data) => this.outputChannel.append(data.join(' ')),
            finish: () => {
                this.outputChannel.appendLine(`[${utilities_1.getDate()}] Test output for ${id} ends...`);
                stopLoader();
                this.update(`${id} finished`);
            }
        };
    }
    connectCommand(cmd) {
        cmd.onData(data => this.outputChannel.append(data.toString()));
    }
    resetLoaded() {
        Object.keys(this.internalLoaded).forEach((key) => Object.assign(this.internalLoaded, { [key]: 0 }));
    }
}
exports.default = OutputManager;
//# sourceMappingURL=OutputManager.js.map