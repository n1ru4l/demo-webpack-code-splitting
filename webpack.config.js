'use strict'

const path = require(`path`)
const CopyWebpackPlugin = require(`copy-webpack-plugin`)


module.exports = {
  context: path.join(__dirname, `src`),
  output: {
    path: path.resolve(__dirname, `dist`),
    filename: `dist.js`,
  },
  entry: `./index.js`,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: `babel-loader`,
      }
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: `index.html`, },
    ]),
  ],
  devtool: `inline-source-map`,
}
