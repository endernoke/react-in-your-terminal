# React in Your Terminal

This repo contains my presentation at Hong Kong Open Source Conference 2026, titled "React in Your Terminal: Building Beautiful TUIs with Ink".

[Ink](https://github.com/vadimdemedes/ink) lets you build command-line apps with React.

The presentation is built with [presenterm](https://github.com/mfontanini/presenterm).

## Content of Presentation

1. Merits of TUIs
2. How TUIs work
3. Introduction to Ink
4. Ink fundamentals
5. Examples
   1. Full screen TUI
   2. Accepting user input
6. The Ink ecosystem
   1. Pastel
   2. Useful components
   3. Ink testing library
7. TUI app showcase: Instagram CLI

## How to Run

Prerequisites:

- **presenterm** for rendering the slides in the terminal. You may install here: [https://mfontanini.github.io/presenterm/install.html](https://mfontanini.github.io/presenterm/install.html)
- **node.js 22+** for running the code snippets

Instructions:

1. Install dependencies for running the code snippets

   ```bash
   npm install
   ```

2. Display the slides in your terminal:

   ```bash
   presenterm slides.md -xX
   ```

   The `-x` flag enables code snippet execution, and `-X` enables replacing code with its output (for displaying the figlet big text and QR code).

3. During the presentation, use arrow keys to move between slides, and `Ctrl+E` to execute code snippets.
