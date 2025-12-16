import * as vscode from 'vscode';
import { Range } from 'vscode';

/**
 * CodelensProvider
 */
export class CodelensProvider implements vscode.CodeLensProvider {

	private codeLenses: vscode.CodeLens[] = [];
	private regex: RegExp;
	private _onDidChangeCodeLenses: vscode.EventEmitter<void> = new vscode.EventEmitter<void>();
	public readonly onDidChangeCodeLenses: vscode.Event<void> = this._onDidChangeCodeLenses.event;

	constructor() {
		this.regex = /(^(describe|\t*(describe|it))|(^test))/gm;

		vscode.workspace.onDidChangeConfiguration((_) => {
			this._onDidChangeCodeLenses.fire();
		});
	}

	public provideCodeLenses(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.CodeLens[] | Thenable<vscode.CodeLens[]> {

		// if (vscode.workspace.getConfiguration("codelens-sample").get("enableCodeLens", true)) {
		this.codeLenses = [...this._provideTopOfDocumentCodeLenses(document), ...this._provideTestCaseCodeLenses(document)];

		return this.codeLenses;
	}

	private _provideTestCaseCodeLenses(document: vscode.TextDocument): vscode.CodeLens[] {
			const codeLenses = [];

			const regex = new RegExp(this.regex);
			const text = document.getText();
			const docUri = vscode.window.activeTextEditor?.document.uri;

			let matches;

			while ((matches = regex.exec(text)) !== null) {
				const line = document.lineAt(document.positionAt(matches.index).line);
				const indexOf = line.text.indexOf(matches[0]);
				const type = matches[0].trim();
				const position = new vscode.Position(line.lineNumber, indexOf);
				const range = document.getWordRangeAtPosition(position, new RegExp(this.regex));
				if (range && (type === "describe" || type === "it")) {
					codeLenses.push(new vscode.CodeLens(range, {
						title: "Run",
						tooltip: "Run test in VS Code Terminal",
						command: "cs-test-runner.run-mocha",
						arguments: [{range, fileUrl: docUri}, false]
					}));
					codeLenses.push(new vscode.CodeLens(range, {
						title: "Debug",
						tooltip: "Run test in VS Code debug view",
						command: "cs-test-runner.debug-mocha",
						arguments: [{range, fileUrl: docUri}, false]
					}));
				}
				if (range && type === "test") {
					codeLenses.push(new vscode.CodeLens(range, {
						title: "Build and Run",
						tooltip: "Build and Run test in VS Code Terminal",
						command: "cs-test-runner.build-run-ava",
						arguments: [{range, fileUrl: docUri}, false]
					}));
					codeLenses.push(new vscode.CodeLens(range, {
						title: "Run",
						tooltip: "Run test in VS Code Terminal",
						command: "cs-test-runner.run-ava",
						arguments: [{range, fileUrl: docUri}, false]
					}));
				}
			}

			return codeLenses;
	}

	private _provideTopOfDocumentCodeLenses(document: vscode.TextDocument): vscode.CodeLens[]{
			const codeLenses = [];

			const isAvaFileRegex = new RegExp(/^test/gm);
			const text = document.getText();
			const matches = isAvaFileRegex.exec(text);
			const docUri = vscode.window.activeTextEditor?.document.uri;

			let type;
			if (matches) {
				type = matches![0].trim();
			}
			if(type === "test"){
					const topOfDocument = new Range(0, 0, 0, 0);

					codeLenses.push(new vscode.CodeLens(topOfDocument, {
						title: "Build and Run tests",
						tooltip: "Build and Run tests in VS Code Terminal",
						command: "cs-test-runner.build-run-file-ava",
						arguments: [{fileUrl: docUri}, false]
					}));

					codeLenses.push(new vscode.CodeLens(topOfDocument, {
						title: "Run tests",
						tooltip: "Run tests in VS Code Terminal",
						command: "cs-test-runner.run-file-ava",
						arguments: [{fileUrl: docUri}, false]
					}));
			}
			console.log(codeLenses);
			return codeLenses;
	}

	// public resolveCodeLens(codeLens: vscode.CodeLens, token: vscode.CancellationToken) {
	// 	if (vscode.workspace.getConfiguration("codelens-sample").get("enableCodeLens", true)) {
	// 		const document = vscode.window.activeTextEditor?.document.uri;
	// 		codeLens.command = {
	// 			title: "Debug",
	// 			tooltip: "Tooltip provided by sample extension",
	// 			command: "codelens-sample.codelensAction",
	// 			arguments: [{range: codeLens.range, file: document}, false]
	// 		};
	// 		return codeLens;
	// 	}
	// 	return null;
	// }
}
