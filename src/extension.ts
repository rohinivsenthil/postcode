// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import axios from "axios";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "postcode" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand(
    "postcode.helloWorld",
    () => {
      // The code you place here will be executed every time your command is executed

      // Display a message box to the user
      vscode.window.showInformationMessage("Welcome to Postcode!");

      const panel = vscode.window.createWebviewPanel(
        "postcode",
        "Postcode",
        vscode.ViewColumn.One,
        { enableScripts: true }
      );

      const scriptUri = panel.webview.asWebviewUri(
        vscode.Uri.joinPath(context.extensionUri, "dist/webview.js")
      );

      panel.webview.html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
		<script src="${scriptUri}"></script>
  </body>
</html>`;

      panel.webview.onDidReceiveMessage(
        ({ reqType, requestUrl, headers, body, auth }) => {
          if (requestUrl) {
            axios({
              method: reqType,
              url: requestUrl,
              data: body,
              transformResponse: [(data) => data],
              responseType: "text",
              validateStatus: () => true,
            })
              .then((resp) =>
                panel.webview.postMessage({
                  type: "response",
                  data: resp.data,
                  status: resp.status,
                  statusText: resp.statusText,
                })
              )
              .catch((err) => {
                panel.webview.postMessage({
                  type: "response",
                  error: err,
                });
                vscode.window.showInformationMessage(
                  "Error: Could not send request"
                );
              });
          } else {
            vscode.window.showInformationMessage("Request URL is empty");
          }
        }
      );
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
