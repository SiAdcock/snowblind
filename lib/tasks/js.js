'use strict';

import gulp from 'gulp';
import getNodeEnv from '../../app/helpers/getNodeEnv';
import webpack from 'webpack-stream';

let webpackConfig;

if (getNodeEnv() === 'development') {
  webpackConfig = Object.assign({}, require('../../webpack.config.dev'));
}
else {
  webpackConfig = Object.assign({}, require('../../webpack.config'));
}

const js = () => {
  return gulp.src(webpackConfig.entry)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(webpackConfig.output.path));
};

export default js;
