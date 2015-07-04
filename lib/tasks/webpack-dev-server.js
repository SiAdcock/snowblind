'use strict';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('../../webpack.config');
var gutil = require('gulp-util');

module.exports = function(callback) {
  var myDevConfig = Object.create(webpackConfig);
  myDevConfig.devtool = 'sourcemap';
  myDevConfig.debug = true;
  // Start a webpack-dev-server
  var compiler = webpack(myDevConfig);

  new WebpackDevServer(compiler, {
    publicPath: '/' + myDevConfig.output.publicPath,
  }).listen(8080, 'localhost', function(err) {
      if (err) {
        throw new gutil.PluginError('webpack-dev-server', err);
      }
      gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
      // keep the server alive or continue?
      // callback();
    });
};
