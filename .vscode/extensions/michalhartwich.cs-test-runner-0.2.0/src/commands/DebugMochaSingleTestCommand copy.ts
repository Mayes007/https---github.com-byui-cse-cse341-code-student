import { debug, window, workspace } from "vscode";
import { ICommandHandler, ICommandOptions, ICommandPayload } from "../types";
import { extractTestCase, findProjectRoot } from "../utils";

export default class DebugMochaSingleTestCommand implements ICommandHandler {
	public get options(): ICommandOptions {
		return {
			name: "cs-test-runner.debug-mocha" 
		};
	}

	public async handle(payload: ICommandPayload) {
		const { range, fileUrl } = payload;
		const line = window.activeTextEditor?.document.lineAt(range.start.line);
		const testCase = extractTestCase( line!.text);
		const workspaceLoc = workspace.getWorkspaceFolder(fileUrl);
		const projectDir = findProjectRoot(fileUrl.path);

		try {
			await debug.startDebugging(workspaceLoc, {
				type: "node",
				request: "launch",
				name: "CSTEST",
				cwd: projectDir,
				runtimeExecutable: projectDir + "/node_modules/.bin/mocha",
				args: [
					'-g',
					`"${testCase}"`
				],
				outputCapture: "std",
				internalConsoleOptions: "openOnSessionStart",
				skipFiles: [
					"<node_internals>/**"
				],
			});
		} catch (e) {
			console.log(e);
		}
	}
}
