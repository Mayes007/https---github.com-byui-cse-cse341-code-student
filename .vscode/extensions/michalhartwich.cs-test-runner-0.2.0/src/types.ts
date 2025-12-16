import { Range, Uri } from "vscode";

export interface ICommandOptions {
	name: string;
}

export interface ICommandPayload {
	range: Range;
	fileUrl: Uri;
}

export interface ICommandHandler {
	options: ICommandOptions;
	handle(payload: ICommandPayload): void
}
