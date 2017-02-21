`use strict`

const path = require(`path`)


module.exports = {
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
  devtool: `inline-source-map`,
  devServer: {
    contentBase: path.join(__dirname, `dist`),
    port: 1337,
  },
}
