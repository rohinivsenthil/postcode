//@ts-check

"use strict";

const path = require("path");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

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
              test: /\.svg$/,
              use: [
                require.resolve("@svgr/webpack"),
                require.resolve("url-loader"),
              ],
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
    plugins: [
      new MonacoWebpackPlugin({
        languages: ["html", "xml", "json"],
      }),
    ],
  };
};

module.exports = [extensionConfig, webviewConfig];
