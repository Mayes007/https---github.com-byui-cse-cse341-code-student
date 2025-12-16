import { exec } from "child_process";
import { OutputChannel } from "vscode";

export interface ITaskRunner {
	run(cmd: string): void;
	show(): void;
}

export default class TaskRunner implements ITaskRunner {
	constructor(private readonly _outputChannel: OutputChannel) {
	}

	public show(): void {
		this._outputChannel.show();
	}

	public run(cmd: string): void {
		this._outputChannel.show();
		this._outputChannel.appendLine(`Running: ${cmd}`);
		
		const proc = exec(cmd);

		proc.stdout?.on('data', d => this._outputChannel.append(d));
		proc.stderr?.on('data', d => this._outputChannel.append(d));
	} 
}
