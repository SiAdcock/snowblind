'use strict';

var gulp = require('gulp');
var path = require('path');
var $ = require('gulp-load-plugins')();
var getNodeEnv = require('../../app/helpers/getNodeEnv');

module.exports = function() {
  var srcStream = gulp.src(path.join(process.cwd(), 'app/styles/styles.scss'));
  var outputStream;

  if (getNodeEnv() === 'production') {
    outputStream = srcStream
      .pipe($.sass({
        outputStyle: 'compressed'
      }).on('error', $.util.log))
      .pipe($.autoprefixer());
  }
  if (getNodeEnv() === 'development') {
    outputStream = srcStream
      .pipe($.sourcemaps.init())
      .pipe($.sass({
        errLogToConsole: true
      }))
      .pipe($.livereload())
      .pipe($.sourcemaps.write('./maps'));
  }

  return outputStream
    .pipe(gulp.dest('build/styles'));
};