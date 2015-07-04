'use strict';

var gulp = require('gulp');
var nodemon = require('./lib/tasks/nodemon');
var clean = require('./lib/tasks/clean');
var js = require('./lib/tasks/js');
var watch = require('./lib/tasks/watch');
var webpackDevServer = require('./lib/tasks/webpack-dev-server');

gulp.task('default', ['server']);
gulp.task('server', ['assets', 'watch', 'webpack-dev-server', 'nodemon']);
gulp.task('assets', ['clean', 'js']);
gulp.task('clean', clean);
gulp.task('js', js);
gulp.task('watch', watch);
gulp.task('webpack-dev-server', webpackDevServer);
gulp.task('nodemon', nodemon);
