'use strict';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from '../../webpack.config.dev';
import log from '../logging/index';
import appConfig from '../../config/app';

const startDevServer = () => {
  let myDevConfig = Object.create(webpackConfig);
  myDevConfig.devtool = 'sourcemap';
  myDevConfig.debug = true;
  // Start a webpack-dev-server
  let compiler = webpack(myDevConfig);

  new WebpackDevServer(compiler, {
    publicPath: myDevConfig.output.publicPath,
    hot: true,
    quiet: true,
    noInfo: true,
    stats: {
      colors: true
    }
  }).listen(appConfig.port + 1, appConfig.host, function(err) {
      if (err) {
        log.info(err);
      }
      log.info('[webpack-dev-server]', `${appConfig.url}:${appConfig.port + 1}/webpack-dev-server/index.html`);
    });
};

export default startDevServer;
