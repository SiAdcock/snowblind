'use strict';

var gulp = require('gulp');
var browserSync = require('./lib/tasks/browser-sync');
var webpackDevServer = require('./lib/tasks/webpack-dev-server');

gulp.task('browser-sync', browserSync);
gulp.task('default', ['browser-sync']);
gulp.task('webpack-dev-server', webpackDevServer);
