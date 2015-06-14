'use strict';

var gulp = require('gulp');
var browserSync = require('./lib/tasks/browser-sync');

gulp.task('browser-sync', browserSync);
gulp.task('default', ['browser-sync']);
