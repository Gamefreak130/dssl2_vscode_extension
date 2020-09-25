"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const commands = require("./commands");

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    // Each file has one repl, saved in this repls map
    const repls = new Map();
    vscode.window.onDidCloseTerminal((terminal) => {
        // Remove and dispose repls from map when closed
        repls.forEach((val, key) => val === terminal && repls.delete(key) && val.dispose());
    });
    const loadInRepl = vscode.commands.registerCommand("dssl2.loadRepl", () => commands.loadInRepl(repls));
    const searchDocumentation = vscode.commands.registerCommand("dssl2.searchDocumentation", () => commands.searchDocumentation());
    context.subscriptions.push(loadInRepl, searchDocumentation);
}
exports.activate = activate;

// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;