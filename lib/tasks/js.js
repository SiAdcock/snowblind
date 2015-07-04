'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var webpackConfig = Object.create(require('../../webpack.config.dev'));

module.exports = function() {
  return gulp.src(webpackConfig.entry)
    .pipe($.webpack(webpackConfig))
    .pipe(gulp.dest(webpackConfig.output.path));
};
