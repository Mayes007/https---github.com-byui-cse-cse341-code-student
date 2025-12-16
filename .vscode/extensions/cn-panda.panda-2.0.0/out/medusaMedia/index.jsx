"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const App_1 = require("./App");
require("./index.scss");
const vscode = window.acquireVsCodeApi();
console.log("initialData", window.initialData, window.defaultLanguage);
ReactDOM.render(<App_1.default vscode={vscode} initialData={window.initialData} defaultLanguage={window.defaultLanguage}/>, document.getElementById("root"));
//# sourceMappingURL=index.jsx.map