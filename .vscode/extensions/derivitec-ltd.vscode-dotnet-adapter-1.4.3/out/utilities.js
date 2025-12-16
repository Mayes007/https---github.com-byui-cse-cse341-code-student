"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const toString36 = (num) => num.toString(36).substr(2);
const getUid = () => toString36(Math.random()) + toString36(Date.now());
exports.getUid = getUid;
const createConfigItem = (_a) => {
    var { default: defaultVal } = _a, optional = tslib_1.__rest(_a, ["default"]);
    return (Object.assign({ typecheck: Array.isArray(defaultVal) ? Array.isArray : (data) => typeof data === typeof defaultVal, default: defaultVal }, optional));
};
exports.createConfigItem = createConfigItem;
const optimiseGlobPatterns = (patterns) => {
    if (patterns.every(pattern => pattern.indexOf('{') === -1))
        return [`{${patterns.join(',')}}`];
    return patterns;
};
exports.optimiseGlobPatterns = optimiseGlobPatterns;
const getPatternArray = (patterns) => {
    let patternArray = [];
    if (typeof patterns === 'object' && !Array.isArray(patterns)) {
        patternArray = Object.values(patterns)
            .reduce((acc, val) => acc.concat(val), []);
    }
    else if (typeof patterns === 'string') {
        patternArray = [patterns];
    }
    else if (Array.isArray(patterns)) {
        patternArray = patterns;
    }
    return optimiseGlobPatterns(patternArray);
};
exports.getPatternArray = getPatternArray;
const plurals = {
    '': 's',
    'is': 'are',
};
const plural = (count, word = '') => {
    const shouldPlural = count !== 1;
    if (word in plurals)
        return shouldPlural ? plurals[word] : word;
    return shouldPlural ? `${word}s` : word;
};
exports.plural = plural;
const objToListSentence = (obj, ignoreZeros = true) => {
    let str = '';
    let entries = Object.entries(obj);
    if (ignoreZeros) {
        entries = entries.filter(([key, value]) => value !== 0);
    }
    entries.forEach(([key, value], i, arr) => {
        const needsJoiner = str.length > 0;
        const last = arr.length - 1 === i;
        const joiner = last ? ' and ' : ', ';
        if (needsJoiner)
            str += joiner;
        str += `${value} ${key}`;
    });
    return str;
};
exports.objToListSentence = objToListSentence;
const getDate = () => new Date().toISOString();
exports.getDate = getDate;
const getFileFromPath = (path) => path.substr(path.lastIndexOf('/') + 1);
exports.getFileFromPath = getFileFromPath;
const normaliseError = (err) => {
    const unknownName = 'Unknown';
    const unknownMessage = 'An unknown error occurred';
    if (err instanceof Error)
        return err;
    if (err === null)
        return { name: 'NULL', message: 'A null value was returned' };
    if (typeof err === 'object' && (!('name' in err) || !('message' in err)))
        return Object.assign(err, { name: err.name || unknownName, message: err.message || unknownMessage });
    if (typeof err === 'object')
        return err;
    if (typeof err === 'string')
        return { name: err, message: err };
    return { name: unknownName, message: unknownMessage };
};
exports.normaliseError = normaliseError;
//# sourceMappingURL=utilities.js.map