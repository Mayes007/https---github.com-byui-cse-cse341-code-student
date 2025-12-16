'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const js2flowchart = require("js2flowchart");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "code-flowchart" is now active!');
    let previewUri = vscode.Uri.parse('js-preview://authority/js-preview');
    class TextDocumentContentProvider {
        constructor() {
            this._onDidChange = new vscode.EventEmitter();
        }
        provideTextDocumentContent(uri) {
            return this.createJsPreview();
        }
        get onDidChange() {
            return this._onDidChange.event;
        }
        update(uri) {
            this._onDidChange.fire(uri);
        }
        createJsPreview() {
            let editor = vscode.window.activeTextEditor;
            if (!(editor.document.languageId === 'javascript')) {
                return this.errorSnippet(`Active editor doesn't show a JS document - nothen to preview. ${editor.document.languageId}`);
            }
            return this.extractSnippet();
        }
        extractSnippet() {
            let editor = vscode.window.activeTextEditor;
            let text = editor.document.getText();
            const svg = js2flowchart.convertCodeToSvg(text);
            return this.snippet(svg);
        }
        errorSnippet(error) {
            return `
                    <body>
                        ${error}
                    </body>`;
        }
        snippet(svg) {
            // const properties = document.getText().slice(propStart + 1, propEnd);
            return `
                <body>
                    ${svg}
                </body>`;
        }
    }
    let provider = new TextDocumentContentProvider();
    let registration = vscode.workspace.registerTextDocumentContentProvider('js-preview', provider);
    vscode.workspace.onDidChangeTextDocument((e) => {
        if (e.document === vscode.window.activeTextEditor.document) {
            provider.update(previewUri);
        }
    });
    vscode.window.onDidChangeTextEditorSelection((e) => {
        if (e.textEditor === vscode.window.activeTextEditor) {
            provider.update(previewUri);
        }
    });
    let disposable = vscode.commands.registerCommand('extension.showJsFlowchart', () => {
        return vscode.commands.executeCommand('vscode.previewHtml', previewUri, vscode.ViewColumn.Two, 'JS Flowchart').then((success) => {
        }, (reason) => {
            vscode.window.showErrorMessage(reason);
        });
    });
    let highlight = vscode.window.createTextEditorDecorationType({ backgroundColor: 'rgba(200,200,200,.35)' });
    /*
    *
    * LETING THIS HERE FOR FUTURE FEATURES
    *
    */
    // vscode.commands.registerCommand('extension.revealCssRule', (uri: vscode.Uri, propStart: number, propEnd: number) => {
    //     for (let editor of vscode.window.visibleTextEditors) {
    //         if (editor.document.uri.toString() === uri.toString()) {
    //             let start = editor.document.positionAt(propStart);
    //             let end = editor.document.positionAt(propEnd + 1);
    //             editor.setDecorations(highlight, [new vscode.Range(start, end)]);
    //             setTimeout(() => editor.setDecorations(highlight, []), 1500);
    //         }
    //     }
    // });
    context.subscriptions.push(disposable, registration);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map