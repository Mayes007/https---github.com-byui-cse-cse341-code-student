import { commands } from "vscode";
import { ICommandHandler } from "./types";

export default class CommandsManager {
	addCommand(cmd: ICommandHandler): void {
		commands.registerCommand(cmd.options.name, (args) => {
			cmd.handle(args);
		});
	}
}
