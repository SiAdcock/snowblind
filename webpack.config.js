'use strict';

import path from 'path';
import webpack from 'webpack';

const config = {
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
        loader: 'babel?stage=1&optional=runtime'
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

export default config;
