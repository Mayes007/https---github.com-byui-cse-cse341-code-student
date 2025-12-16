import { window } from "vscode";
import { ITaskRunner } from "../TaskRunner";
import { ICommandHandler, ICommandOptions, ICommandPayload } from "../types";
import { extractTestCase, findProjectRoot } from "../utils";

export default class RunMochaSingleTestCommand implements ICommandHandler {
	constructor(private readonly _taskRunner: ITaskRunner) { }

	public get options(): ICommandOptions {
		return {
			name: "cs-test-runner.run-mocha"
		};
	}

	public handle(payload: ICommandPayload) {
		const { range, fileUrl } = payload;
		const line = window.activeTextEditor?.document.lineAt(range.start.line);
		const testCase = extractTestCase( line!.text);
		const projectDir = findProjectRoot(fileUrl.path);
		this._taskRunner.run(`cd ${projectDir} && ./node_modules/.bin/mocha -g "${testCase}"`);
	}
}
