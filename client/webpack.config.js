const path = require("path");
const webpack = require("webpack");
const config = require('./config');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bowser_components)/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/env"
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      "*",
      ".js",
      ".jsx"
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: config.port,
    publicPath: "http://localhost:" + config.port + "/dist/",
    hotOnly: true,
    watchContentBase: true,
    disableHostCheck: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
