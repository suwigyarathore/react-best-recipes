const HtmlWebPackPlugin = require("html-webpack-plugin")
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: ['whatwg-fetch', './index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(png|jpeg)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new HtmlWebPackPlugin({
      template: "./index.html",
      inject: "body"
    },
      new ProgressBarPlugin())
  ]
};
