'use strict';

import path from 'path';
import webpack from 'webpack';
import appConfig from './config/app';

const config = {
  entry: [
    `webpack-dev-server/client?${appConfig.url}:${appConfig.port + 1}`,
    'webpack/hot/only-dev-server',
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'app.js',
    publicPath: `${appConfig.url}:${appConfig.port + 1}/build/`
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel?stage=1&optional=runtime'],
        exclude: /node_modules/
      }
    ]
  },
  resolveLoader: {
    root: __dirname + '/node_modules'
  }
};

export default config;
