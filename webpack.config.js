//@ts-check

"use strict";

const path = require("path");
const postcssNormalize = require("postcss-normalize");

const imageInlineSizeLimit = parseInt(
  process.env.IMAGE_INLINE_SIZE_LIMIT || "10000"
);

const baseConfig = (webpackEnv) => {
  const isEnvDevelopment = webpackEnv === "development";
  const isEnvProduction = webpackEnv === "production";

  return {
    mode: isEnvProduction ? "production" : isEnvDevelopment && "development",
    bail: isEnvProduction,
    devtool: isEnvProduction
      ? "source-map"
      : isEnvDevelopment && "eval-cheap-module-source-map",
    resolve: { extensions: [".ts", ".tsx", ".js"] },
    module: {
      rules: [
        {
          oneOf: [
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: require.resolve("url-loader"),
              options: {
                limit: imageInlineSizeLimit,
                name: "static/media/[name].[hash:8].[ext]",
              },
            },
            {
              test: /\.tsx?$/,
              exclude: /node_modules/,
              loader: require.resolve("ts-loader"),
            },
            {
              test: /\.css$/,
              use: [
                require.resolve("style-loader"),
                {
                  loader: require.resolve("css-loader"),
                  options: {
                    importLoaders: 1,
                    sourceMap: isEnvProduction || isEnvDevelopment,
                  },
                },
                {
                  loader: require.resolve("postcss-loader"),
                  options: {
                    postcssOptions: {
                      // Necessary for external CSS imports to work
                      // https://github.com/facebook/create-react-app/issues/2677
                      ident: "postcss",
                      plugins: () => [
                        require("postcss-flexbugs-fixes"),
                        require("postcss-preset-env")({
                          autoprefixer: { flexbox: "no-2009" },
                          stage: 3,
                        }),
                        postcssNormalize(),
                      ],
                    },
                  },
                },
              ],
              sideEffects: true,
            },
            {
              loader: require.resolve("file-loader"),
              exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
              options: {
                name: "media/[name].[hash:8].[ext]",
              },
            },
          ],
        },
      ],
    },
  };
};

const extensionConfig = (webpackEnv) => {
  return {
    ...baseConfig(webpackEnv),
    target: "node",
    entry: "./src/extension.ts",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "extension.js",
      libraryTarget: "commonjs2",
    },
    externals: { vscode: "commonjs vscode" },
  };
};

const webviewConfig = (webpackEnv) => {
  return {
    ...baseConfig(webpackEnv),
    entry: "./webview/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "webview.js",
    },
  };
};

module.exports = [extensionConfig, webviewConfig];
