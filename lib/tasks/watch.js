'use strict';

var gulp = require('gulp');
var path = require('path');

const watch = () => {
  gulp.watch(path.join('app/styles', '**/*.scss'), ['scss']);
};

export default watch;
