const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: path.resolve(__dirname, "src/index.jsx"),
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
  },
  resolve: {
    alias: {
      Firebase: path.resolve(__dirname, "src/firebase"),
      Contexts: path.resolve(__dirname, "src/contexts"),
      Components: path.resolve(__dirname, "src/components"),
      Constants: path.resolve(__dirname, "src/constants"),
      Features: path.resolve(__dirname, "src/features"),
      Helpers: path.resolve(__dirname, "src/helpers"),
      Hooks: path.resolve(__dirname, "src/hooks"),
      Pages: path.resolve(__dirname, "src/pages"),
      Assets: path.resolve(__dirname, "src/assets"),
      Utils: path.resolve(__dirname, "src/utils"),
      Theme: path.resolve(__dirname, "src/theme"),
    },
    modules: ["node_modules"],
    extensions: [".js", ".jsx", "..."],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.(css)$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
            },
          },
        ],
      },
      {
        test: /\.(glb|gltf)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "models",
            },
          },
        ],
      },
      {
        test: /\.(mp3)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "sounds",
            },
          },
        ],
      },
      {
        test: /\.(mp4)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "videos",
            },
          },
        ],
      },
      {
        test: /\.(ttf|otf|woff|woff2|tif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new Dotenv(),
  ],
};
