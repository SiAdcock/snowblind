'use strict';

var gulp = require('gulp');
var webpackDevServer = require('./lib/tasks/webpack-dev-server');
var clean = require('./lib/tasks/clean');
var js = require('./lib/tasks/js');

gulp.task('default', ['server']);
gulp.task('server', ['assets', 'webpack-dev-server']);
gulp.task('assets', ['clean', 'js']);
gulp.task('clean', clean);
gulp.task('js', js);
gulp.task('webpack-dev-server', webpackDevServer);
