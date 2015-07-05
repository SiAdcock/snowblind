'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var env = process.env.NODE_ENV || 'development';
var webpackConfig;

if (env === 'development') {
  webpackConfig = Object.create(require('../../webpack.config.dev'));
}
else {
  webpackConfig = Object.create(require('../../webpack.config'));
}

module.exports = function() {
  return gulp.src(webpackConfig.entry)
    .pipe($.webpack(webpackConfig))
    .pipe(gulp.dest(webpackConfig.output.path));
};
