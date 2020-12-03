"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const open = require("open");

exports.loadInRepl = async (repls) => {
	let editor = vscode.window.activeTextEditor;
	if (editor) {
        let filePath = normalizeFilePath(editor.document.fileName);
		let racketPath = vscode.workspace.getConfiguration("dssl2").get("racketPath");
		if (racketPath !== "") {
            racketPath += ` -tli "${filePath}" dssl2`
			if (repls.has(filePath)) {
                let toRemove = repls.get(filePath);
                repls.delete(filePath);
				toRemove.dispose();
            }
            let fileName = filePath.substring(filePath.lastIndexOf('/') + 1);
            await editor.document.save();
            repls.set(filePath, createRepl(fileName, racketPath));
		}
		else {
			vscode.window.showErrorMessage("No Racket executable specified. Please add the path to the Racket executable in settings");
		}
	}
	else {
		vscode.window.showErrorMessage("A file must be opened before you can do that");
	}
}

exports.searchDocumentation = () => {
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

function normalizeFilePath(filePath) {
    return process.platform === "win32" 
    ? filePath.replace(/\\/g, "/") : filePath;
}

function createRepl(fileName, racketPath) {
    let repl = vscode.window.createTerminal(`REPL (${fileName})`);
    repl.show();
    repl.sendText(racketPath);
    return repl;
}