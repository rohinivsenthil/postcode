# Postcode

Postcode is a [Visual Studio Code](https://code.visualstudio.com/) [extension](https://marketplace.visualstudio.com/VSCode) that can be used to create and test simple and complex HTTP/s requests, as well as view responses.

**Latest Release: 1.0.0**

## Quick start

**Step 1.** Install the Postcode extension for Visual Studio Code  
**Step 2.** Click on the Postcode icon in the side panel OR run the following command **Postcode: Create Request**  
**Step 3** Create or test your HTTP/s requests and hit Send to see the responses 

## Commands

| Command | Description |
|---|---|
| Postcode: Create Request | Opens a new Postcode tab to create and test requests |


## Issues, feature requests, and contributions

### Issues 

- If you come across a problem with the extension, please file an [issue](https://github.com/rohinivsenthil/postcode/issues/new)
- For list of known issues, please check the [issues tab](https://github.com/rohinivsenthil/postcode/issues/new)

### Feature requests

- Find planned features for future releases marked as [feature](https://github.com/rohinivsenthil/postcode/issues?q=is%3Aissue+is%3Aopen+label%3Afeature) under issues tab.
- For new feature requests, please file an [issue](https://github.com/rohinivsenthil/postcode/issues/new)

### Contributions

Contributions are always welcome! 

#### Running the extension locally for development

1. Clone the repository and install dependencies by running `yarn install`
2. Press `F5` to open a new window with your extension loaded.
3. Run your command from the command palette by pressing (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) and typing `Postcode: Create Request`.

#### Folder structure

- **`package.json`** - this is the manifest file in which you declare your extension and command. The plugin registers a command and defines its title and command name. With this information VS Code can show the command in the command palette.
- **`webview`**: folder where you will find entire React code 
- **`src/extension.ts`**: this is the main file where you will provide the implementation of your command. The file exports one function, `activate`, which is called the very first time your extension is activated (in this case by executing the command). Inside the `activate` function we call `registerCommand`. We pass the function containing the implementation of the command as the second parameter to `registerCommand`.

#### Making changes

- You can relaunch the extension from the debug toolbar after changing code in `src/extension.ts`.
- You can also reload (`Ctrl+R` or `Cmd+R` on Mac) the VS Code window with your extension to load your changes.


