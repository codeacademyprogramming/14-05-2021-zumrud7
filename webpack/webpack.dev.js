const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// const isProd = ""

module.exports = merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    contentBase: './build',
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
],
})
