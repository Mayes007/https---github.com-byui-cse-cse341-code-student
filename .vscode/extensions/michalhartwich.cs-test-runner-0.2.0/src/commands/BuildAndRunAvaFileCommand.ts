import { ITaskRunner } from "../TaskRunner";
import { ICommandHandler, ICommandOptions, ICommandPayload } from "../types";
import { findProjectRoot, findTestDir } from "../utils";

export default class BuildAndRunAvaFileCommand implements ICommandHandler {
	constructor(private readonly _taskRunner: ITaskRunner) { }

	public get options(): ICommandOptions {
		return {
			name: "cs-test-runner.build-run-file-ava"
		};
	}

	public handle(payload: ICommandPayload) {
		const { fileUrl } = payload;
		const projectDir = findProjectRoot(fileUrl.path);
		const testDir = findTestDir(fileUrl.path);

		this._taskRunner.run(`cd ${projectDir} && pnpm build:test && ./node_modules/.bin/ava ${testDir}`);
	}
}
