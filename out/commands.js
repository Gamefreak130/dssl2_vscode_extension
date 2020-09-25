"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");

function loadInRepl(repls) {
    vscode.window.showInformationMessage('Loaded');
}
exports.loadInRepl = loadInRepl;

function searchDocumentation() {
    vscode.window.showInformationMessage('Searched');
}
exports.searchDocumentation = searchDocumentation;