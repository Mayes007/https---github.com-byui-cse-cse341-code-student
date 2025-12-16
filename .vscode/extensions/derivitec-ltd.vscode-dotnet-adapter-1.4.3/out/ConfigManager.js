"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const utilities_1 = require("./utilities");
const schema = {
    attachCpp: utilities_1.createConfigItem({ default: false }),
    logpanel: utilities_1.createConfigItem({ default: false }),
    codeLens: utilities_1.createConfigItem({ default: true }),
    runEnvVars: utilities_1.createConfigItem({ default: {} }),
    searchpatterns: utilities_1.createConfigItem({ default: [],
        typecheck: (value) => typeof value === 'object' || typeof value === 'string', required: true }),
    skippattern: utilities_1.createConfigItem({ default: '' }),
};
class ConfigManager {
    constructor(workspace, log) {
        this.workspace = workspace;
        this.log = log;
        this.disposables = [];
        this.schema = schema;
        this.config = vscode.workspace.getConfiguration('dotnetCoreExplorer', this.workspace.uri);
        this.watchers = this.initWatchers();
        this.setupConfigChangeListeners();
    }
    initWatchers() {
        const watchers = {};
        this.configKeys.forEach((key) => {
            watchers[key] = new Set();
        });
        return watchers;
    }
    setupConfigChangeListeners() {
        const disposeListener = vscode.workspace.onDidChangeConfiguration(configChange => {
            this.log.info('Configuration changed');
            this.config = vscode.workspace.getConfiguration('dotnetCoreExplorer', this.workspace.uri);
            const activeWatchers = this.configKeys.filter(key => this.watchers[key].size > 0);
            activeWatchers.forEach((key) => {
                if (configChange.affectsConfiguration(`dotnetCoreExplorer.${key}`, this.workspace.uri)) {
                    const keyWatchers = this.watchers[key];
                    const watcherCount = keyWatchers.size;
                    this.log.info(`Change affects ${key} which has ${watcherCount} watcher${utilities_1.plural(watcherCount)}`);
                    keyWatchers.forEach(func => func(this.get(key)));
                }
            });
        });
        this.disposables.push(disposeListener);
    }
    get configKeys() {
        return Object.keys(schema);
    }
    get(key) {
        if (!(key in this.schema))
            throw `"${key}" is not a recognised configuration item.`;
        this.log.info(`Getting config item: ${key}`);
        const schemaEntry = this.schema[key];
        const required = 'required' in schemaEntry ? schemaEntry.required : false;
        const value = this.config.get(key);
        const noValue = typeof value === 'undefined';
        const wrongType = !(schemaEntry.typecheck(value));
        if (noValue)
            this.log.info(`No entry found for ${key}`);
        if (wrongType)
            this.log.info(`Entry for ${key} has wrong type`);
        if (noValue && required === true)
            throw `${key} required, please add to settings`;
        if (wrongType && required === true) {
            throw `${key} must be of type ${schemaEntry.default.constructor.name}, please change the value in settings`;
        }
        if (noValue || wrongType)
            return schemaEntry.default;
        return value;
    }
    addWatcher(key, cb) {
        this.watchers[key].add(cb);
        return { dispose: () => this.watchers[key].delete(cb) };
    }
    dispose() {
        for (const disposable of this.disposables) {
            disposable.dispose();
        }
        this.disposables = [];
    }
}
exports.ConfigManager = ConfigManager;
//# sourceMappingURL=ConfigManager.js.map