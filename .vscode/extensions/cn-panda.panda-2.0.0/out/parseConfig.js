"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseConfig = {
    macro: {
        placeholder: (variable) => {
            return `{${variable}}`;
        },
    },
    babelConfig: {
        allowImportExportEverywhere: true,
        decoratorsBeforeExport: true,
        plugins: [
            "asyncGenerators",
            "classProperties",
            "decorators-legacy",
            "doExpressions",
            "exportExtensions",
            "exportDefaultFrom",
            "typescript",
            "functionSent",
            "functionBind",
            "jsx",
            "objectRestSpread",
            "dynamicImport",
            "numericSeparator",
            "optionalChaining",
            "optionalCatchBinding",
        ],
    },
};
exports.default = parseConfig;
//# sourceMappingURL=parseConfig.js.map