const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CompressionPlugin = require("compression-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  output: {
    filename: "bundle.[name].[contenthash].js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*",
        "!icons/**",
        "!rss.xml",
        "!sitemap.xml",
        "!robots.txt",
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "bundleCSS.[name].[contenthash].css",
    }),
    // new CompressionPlugin({
    //   algorithm: "gzip",
    //   test: /\.(js|css|html|svg)$/,
    //   threshold: 8192,
    //   minRatio: 0.8,
    // }),
    // new CompressionPlugin({
    //   algorithm: "brotliCompress",
    //   filename: "[path][base].br",
    //   test: /\.(js|css|html|svg)$/,
    //   compressionOptions: {
    //     level: 11,
    //   },
    //   threshold: 8192,
    //   minRatio: 0.8,
    // }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
    }),
  ],
  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `npm.${packageName.replace("@", "")}`;
          },
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  performance: {
    hints: "warning",
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
