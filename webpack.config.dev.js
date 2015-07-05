'use strict';

import path from 'path';
import webpack from 'webpack';

const config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8081',
    'webpack/hot/only-dev-server',
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'app.js',
    publicPath: 'http://localhost:8081/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      }
    ]
  },
  resolveLoader: {
    root: __dirname + '/node_modules'
  }
};

export default config;
