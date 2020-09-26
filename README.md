This is a fork of kanso37's [DSSL2 extension for VSCode](https://github.com/kanso37/dssl2_vscode_extension). While the original extension merely added syntax highlighting, this fork aims to bring in some features from DrRacket that I find useful when coding in DSSL2.

### Syntax Highlighting
Not much to say. It works pretty well with the "One Dark Pro" and "Solarized Dark" themes. I haven't tried it with other color themes.

### Search Documentation
Right-clicking on a highlighted DSSL2 selection and clicking "Search Documentation" will allow you to search for that selection in the DSSL2 documentation. A new tab will be opened in your default browser.

### REPL Support
Lovingly adapted from [Magic Racket](https://github.com/Eugleo/magic-racket). Click the icon at the top right of the editor (or use the "Load file in Racket REPL" command) to load DSSL2 and run the currently-selected file, keeping the Racket REPL open for additional tinkering. Each .rkt file will maintain its own REPL.

### Lambda Snippet
Lovingly stolen from Magic Racket. Press Ctrl+/ (Cmd+/ on Mac) or use the snippet "lmb" to quickly insert a λ (lambda), for use in creating anonymous functions.

# Installation

First, ensure that Racket can be accessed via your terminal of choice. By default, this extension assumes that Racket has been added to your system path; if this is not the case, you can use the "DSSL2: Racket Path" setting to specify the path used to access the Racket executable.

To install the extension, simply clone this project into a folder called "dssl2_vscode_extension"
and then put that folder in ~/.vscode/extensions. Then, reload VSCode if it is already open.