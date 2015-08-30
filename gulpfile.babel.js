'use strict';

import gulp from 'gulp';
import nodemon from './lib/tasks/nodemon';
import clean from './lib/tasks/clean';
import js from './lib/tasks/js';
import watch from './lib/tasks/watch';
import scss from './lib/tasks/scss';
import webpackDevServer from './lib/tasks/webpack-dev-server';
import lint from './lib/tasks/lint';

gulp.task('default', ['server']);
gulp.task('server', ['assets', 'watch', 'webpack-dev-server'], nodemon);
gulp.task('assets', ['clean', 'js', 'scss']);
gulp.task('clean', clean);
gulp.task('js', js);
gulp.task('scss', scss);
gulp.task('watch', watch);
gulp.task('lint', lint);
gulp.task('webpack-dev-server', webpackDevServer);
