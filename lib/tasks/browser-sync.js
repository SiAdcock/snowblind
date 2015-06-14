'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

module.exports = function() {
  browserSync.init({
    server: {
      baseDir: './',
      index: 'index.htm'
    }
  });

  gulp.watch('./*.htm').on('change', browserSync.reload);
  gulp.watch('./app/*.js').on('change', browserSync.reload);
};