'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');

module.exports = function() {
  return gulp.src([
    'app/**/*.js',
    'client/**/*.js',
    'server/**/*.js',
    'lib/**/*.js'
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
};
