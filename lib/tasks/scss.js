'use strict';

import gulp from 'gulp';
import path from 'path';
import gulpLoadPlugins from 'gulp-load-plugins';
import getNodeEnv from '../../app/helpers/getNodeEnv';

const $ = gulpLoadPlugins();
const scss = () => {
  const srcStream = gulp.src(path.join(process.cwd(), 'app/styles/styles.scss'));
  let outputStream;

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

export default scss;
