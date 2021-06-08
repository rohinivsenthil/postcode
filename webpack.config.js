/* eslint-disable @typescript-eslint/no-var-requires */
//@ts-check

"use strict";

const path = require("path");
const webpack = require("webpack");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StaticSiteGeneratorPlugin = require("static-site-generator-webpack-plugin");

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
    resolve: {
      fallback: {
        buffer: require.resolve("buffer"),
        path: require.resolve("path-browserify"),
        url: require.resolve("url"),
      },
      extensions: [".ts", ".tsx", ".js"],
    },
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
                MiniCssExtractPlugin.loader,
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
    plugins: [
      new MiniCssExtractPlugin({
        filename: "ignore.css",
      }),
    ],
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
      new MiniCssExtractPlugin(),
      new MonacoWebpackPlugin({
        languages: [
          "csharp",
          "dart",
          "go",
          "graphql",
          "html",
          "java",
          "typescript",
          "json",
          "objective-c",
          "php",
          "powershell",
          "python",
          "ruby",
          "shell",
          "swift",
          "xml",
        ],
      }),
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
        process: "process/browser",
      }),
    ],
  };
};

const prerenderConfig = (webpackEnv) => {
  const config = baseConfig(webpackEnv);

  return {
    ...config,
    target: "node",
    entry: "./src/webviewContent.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "webviewContent.js",
      libraryTarget: "commonjs2",
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "ignore.css",
      }),
      new StaticSiteGeneratorPlugin({
        paths: ["/"],
      }),
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
        process: "process/browser",
      }),
    ],
  };
};

module.exports = [extensionConfig, webviewConfig, prerenderConfig];
