// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { ExtensionContext, languages, Disposable, window } from 'vscode';
import { CodelensProvider } from './CodelensProvider';
import TaskRunner, { ITaskRunner } from './TaskRunner';
import RunAvaSingleTestCommand from './commands/RunAvaSingleTestCommand';
import CommandsManager from './CommandsManager';
import BuildAndRunAvaSingleTestCommand from './commands/BuildRunAvaSingleTestCommand';
import RunAvaFileCommand from './commands/RunAvaFileCommand';
import BuildAndRunAvaFileCommand from './commands/BuildAndRunAvaFileCommand';
import RunMochaSingleTestCommand from './commands/RunMochaSingleTestCommand';
import DebugMochaSingleTestCommand from './commands/DebugMochaSingleTestCommand copy';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

let disposables: Disposable[] = [];

export function activate(context: ExtensionContext) {
	const codelensProvider = new CodelensProvider();
	console.log("extension loaded");

	languages.registerCodeLensProvider("*", codelensProvider);

	const taskRunner: ITaskRunner = new TaskRunner(window.createOutputChannel('CS Test Runner'));

	const commandManager = new CommandsManager();

	commandManager.addCommand(new RunAvaSingleTestCommand(taskRunner));
	commandManager.addCommand(new BuildAndRunAvaSingleTestCommand(taskRunner));
	commandManager.addCommand(new RunAvaFileCommand(taskRunner));
	commandManager.addCommand(new BuildAndRunAvaFileCommand(taskRunner));
	commandManager.addCommand(new RunMochaSingleTestCommand(taskRunner));
	commandManager.addCommand(new DebugMochaSingleTestCommand());
}

// this method is called when your extension is deactivated
export function deactivate() {
	if (disposables) {
		disposables.forEach(item => item.dispose());
	}
	disposables = [];
}
