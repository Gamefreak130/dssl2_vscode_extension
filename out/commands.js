"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const open = require("open");

function loadInRepl(repls) {
    vscode.window.showInformationMessage('Loaded');
}
exports.loadInRepl = loadInRepl;

function searchDocumentation() {
    let editor = vscode.window.activeTextEditor;
    if (editor) {
        let trimmed = editor.document.getText(editor.selection).trim();
        if (trimmed) {
            open("https://docs.racket-lang.org/search/index.html?q=T%3Adssl2 " + trimmed);
        }
    }
    else {
        vscode.window.showErrorMessage("A file must be opened before you can do that");
    }
}
exports.searchDocumentation = searchDocumentation;