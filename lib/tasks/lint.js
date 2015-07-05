'use strict';

import gulp from 'gulp';
import eslint from 'gulp-eslint';

const lint = () => {
  return gulp.src([
    'app/**/*.js',
    'client/**/*.js',
    'server/**/*.js',
    'lib/**/*.js',
    'spec/**/*.js'
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
};

export default lint;
