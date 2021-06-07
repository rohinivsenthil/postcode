// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import axios from "axios";
import { Provider } from "react-redux";
import * as React from "react";
import { renderToString } from "react-dom/server";

import App from "../webview/App";
import { store } from "../webview/redux/store";

function getWebviewContent() {
  const html = renderToString(
    React.createElement(Provider, { store }, React.createElement(App))
  );

  const preloadedState = store.getState();

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="styleUri" rel="stylesheet" type="text/css"/>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            "\\u003c"
          )}
        </script>
    		<script src="scriptUri"></script>
      </body>
    </html>
  `;
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const webviewContent = getWebviewContent();

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand(
    "postcode.createRequest",
    () => {
      // The code you place here will be executed every time your command is executed

      // Display a message box to the user
      vscode.window.showInformationMessage("Welcome to Postcode!");

      const panel = vscode.window.createWebviewPanel(
        "postcode",
        "Postcode",
        vscode.ViewColumn.One,
        { enableScripts: true, retainContextWhenHidden: true }
      );

      panel.iconPath = vscode.Uri.joinPath(
        context.extensionUri,
        "icons/icon.png"
      );

      panel.webview.html = webviewContent
        .replace(
          "styleUri",
          panel.webview
            .asWebviewUri(
              vscode.Uri.joinPath(context.extensionUri, "dist/main.css")
            )
            .toString()
        )
        .replace(
          "scriptUri",
          panel.webview
            .asWebviewUri(
              vscode.Uri.joinPath(context.extensionUri, "dist/webview.js")
            )
            .toString()
        );

      panel.webview.onDidReceiveMessage(
        ({ method, url, headers, body, auth }) => {
          if (!url) {
            panel.webview.postMessage({
              type: "response",
              error: { message: "Request URL is empty" },
            });
            vscode.window.showInformationMessage("Request URL is empty");
            return;
          }

          const headersObj = {};

          if (auth.type === "bearer") {
            headersObj["Authorization"] = `Bearer ${auth.bearer.token}`;
          }

          headers.forEach(({ key, value, disabled }) => {
            if (!disabled) {
              headersObj[key] = value;
            }
          });

          let data = "";
          if (body.mode === "formdata") {
            const dataObj = new URLSearchParams();
            body.formdata.forEach(({ key, value, disabled }) => {
              if (!disabled) {
                dataObj.append(key, value);
              }
            });
            data = dataObj.toString();
            headersObj["Content-Type"] = "multipart/form-data";
          } else if (body.mode === "urlencoded") {
            const dataObj = new URLSearchParams();
            body.urlencoded.forEach(({ key, value, disabled }) => {
              if (!disabled) {
                dataObj.append(key, value);
              }
            });
            data = dataObj.toString();
            headersObj["Content-Type"] = "application/x-www-form-urlencoded";
          } else if (body.mode === "raw") {
            data = body.raw;
            headersObj["Content-Type"] = {
              json: "application/json",
              html: "text/html",
              xml: "text/xml",
              text: "text/plain",
            }[body.options.raw.language];
          } else if (body.mode === "file") {
            data = body.fileData;
            headersObj["Content-Type"] = "application/octet-stream";
          } else if (body.mode === "graphql") {
            data = JSON.stringify({
              query: body.graphql.query,
              variables: body.graphql.variables,
            });
            headersObj["Content-Type"] = "application/json";
          }

          axios({
            method,
            url,
            baseURL: "",
            data: data,
            headers: headersObj,
            auth: auth.type === "basic-auth" ? auth.basic : undefined,
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
        }
      );
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
// eslint-disable-next-line @typescript-eslint/no-empty-function
export function deactivate() {}
