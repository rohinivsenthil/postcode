import { Provider } from "react-redux";
import * as React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { store } from "./redux/store";

export default () => {
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
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
};
