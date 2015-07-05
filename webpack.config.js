'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'build', 'assets'),
    filename: 'bundle.js',
    publicPath: '/build/assets/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
  ],
  resolveLoader: {
    root: __dirname + '/node_modules'
  }
};
