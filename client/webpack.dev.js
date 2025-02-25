const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    static: { directory: path.resolve(__dirname, "public") },
    hot: true,
    open: true,
    historyApiFallback: true,
    port: 2010,
  },
});
