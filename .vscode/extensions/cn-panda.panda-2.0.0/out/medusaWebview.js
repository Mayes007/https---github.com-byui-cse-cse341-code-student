"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedusaWebView = void 0;
const path = require("path");
const VSCode = require("vscode");
class MedusaWebView {
    static currentPanel;
    static viewType = "react";
    _panel;
    _extensionPath;
    _extensionUri;
    callBack;
    _disposables = [];
    constructor(extensionPath, column, initData, callBack) {
        this._extensionPath = extensionPath;
        this.callBack = callBack;
        this._panel = VSCode.window.createWebviewPanel(MedusaWebView.viewType, "React", column, {
            // Enable javascript in the webview
            enableScripts: true,
            // And restric the webview to only loading content from our extension's `media` directory.
            localResourceRoots: [
                VSCode.Uri.file(path.join(this._extensionPath, "out/medusaMedia")),
            ],
        });
        this._panel.webview.html = this._getHtmlForWebview(initData);
        this._panel.onDidDispose(() => this.dispose(), null, this._disposables);
        // Handle messages from the webview
        this._panel.webview.onDidReceiveMessage((message) => {
            switch (message.action) {
                case "alert":
                    VSCode.window.showErrorMessage(message.text);
                    break;
                case "save":
                    let data = message.data;
                    //这里再去执行文案修复的动作
                    this.callBack(data);
                    this.dispose();
                    // debugger;
                    break;
                case "cancel":
                    this.dispose();
                    break;
            }
        }, null, this._disposables);
    }
    static createOrShow(extensionPath, initData, callBack) {
        const column = VSCode.window.activeTextEditor
            ? VSCode.window.activeTextEditor.viewColumn
            : undefined;
        // If we already have a panel, show it.
        // Otherwise, create a new panel.
        if (MedusaWebView.currentPanel) {
            // MedusaWebView.currentPanel._panel.reveal(column);
            MedusaWebView.currentPanel.dispose();
            MedusaWebView.currentPanel = new MedusaWebView(extensionPath, column || VSCode.ViewColumn.One, initData, callBack);
        }
        else {
            // debugger;
            MedusaWebView.currentPanel = new MedusaWebView(extensionPath, column || VSCode.ViewColumn.One, initData, callBack);
        }
    }
    _getHtmlForWebview(initData) {
        const scriptPathOnDisk = VSCode.Uri.file(path.join(this._extensionPath, "out/medusaMedia", "bundle.js"));
        const scriptUri = scriptPathOnDisk.with({ scheme: "vscode-resource" });
        const stylePathOnDisk = VSCode.Uri.file(path.join(this._extensionPath, "out/medusaMedia", "bundle.css"));
        const styleUri = stylePathOnDisk.with({ scheme: "vscode-resource" });
        const nonce = getNonce();
        // debugger;
        const initialData = (initData && JSON.stringify(initData)) || "";
        const defaultLanguage = VSCode.workspace.getConfiguration().get("mds.i18n.text.language") ||
            "zh_CN";
        return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        <title>React App</title>
        <link crossOrigin href="https://alifd.alicdn.com/npm/@alifd/next/1.21.16/next.min.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="${styleUri}">
        <meta http-equiv="Content-Security-Policy" content="default-src 'none'; font-src vscode-resource: https:; img-src vscode-resource: https:; script-src 'nonce-${nonce}';style-src vscode-resource: 'unsafe-inline' http: https: data:;">
        <script crossOrigin nonce="${nonce}"
        src="https://gw.alipayobjects.com/os/lib/??react/16.8.6/umd/react.production.min.js,react-dom/16.8.6/umd/react-dom.production.min.js,react-dom/16.8.6/umd/react-dom-server.browser.production.min.js"></script>
        <script crossOrigin nonce="${nonce}" src="https://alifd.alicdn.com/npm/@alifd/next/1.21.16/next.min.js"></script>
        <script nonce="${nonce}">
          window.acquireVsCodeApi = acquireVsCodeApi;
          window.initialData = ${initialData};
          window.defaultLanguage = "${defaultLanguage}";
        </script>
      </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>

        
        <script  nonce="${nonce}" src="${scriptUri}"></script>
    </body>
    </html>`;
    }
    doRefactor(data) {
        this._panel.webview.postMessage({ command: "refactor", data });
    }
    dispose() {
        MedusaWebView.currentPanel = undefined;
        this._panel.dispose();
        while (this._disposables.length) {
            const x = this._disposables.pop();
            if (x) {
                x.dispose();
            }
        }
    }
}
exports.MedusaWebView = MedusaWebView;
function getNonce() {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
//# sourceMappingURL=medusaWebview.js.map