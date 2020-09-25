"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const open = require("open");

function loadInRepl(repls) {
	let editor = vscode.window.activeTextEditor;
	if (editor) {
        let fileName = normalizeFilePath(editor.document.fileName);
        fileName = fileName.substring(fileName.lastIndexOf('/') + 1);
		let racketPath = vscode.workspace.getConfiguration("dssl2").get("racketPath");
		if (racketPath !== "") {
            racketPath += ` -tli "${fileName}" dssl2`
			if (repls.has(fileName)) {
                let toRemove = repls.get(fileName);
                repls.delete(fileName);
				toRemove.dispose();
			}
			let repl = createRepl(fileName, racketPath);
			repls.set(fileName, repl);
		}
		else {
			vscode.window.showErrorMessage("No Racket executable specified. Please add the path to the Racket executable in settings");
		}
	}
	else {
		vscode.window.showErrorMessage("A file must be opened before you can do that");
	}
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

function normalizeFilePath(filePath) {
    return process.platform === "win32" 
    ? filePath.replace(/\\/g, "/") : filePath;
}

function createRepl(filePath, racketPath) {
    let repl = vscode.window.createTerminal(`REPL (${filePath})`);
    repl.show();
    repl.sendText(racketPath);
    return repl;
}