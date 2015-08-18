'use strict';

require('babel/register')({});
var gulp = require('gulp');
var nodemon = require('./lib/tasks/nodemon');
var clean = require('./lib/tasks/clean');
var js = require('./lib/tasks/js');
var watch = require('./lib/tasks/watch');
var scss = require('./lib/tasks/scss');
var webpackDevServer = require('./lib/tasks/webpack-dev-server');
var lint = require('./lib/tasks/lint');

gulp.task('default', ['server']);
gulp.task('server', ['assets', 'watch', 'webpack-dev-server'], nodemon);
gulp.task('assets', ['clean', 'js', 'scss']);
gulp.task('clean', clean);
gulp.task('js', js);
gulp.task('scss', scss);
gulp.task('watch', watch);
gulp.task('lint', lint);
gulp.task('webpack-dev-server', webpackDevServer);
