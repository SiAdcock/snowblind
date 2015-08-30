'use strict';

import gulp from 'gulp';
import path from 'path';

const watch = () => {
  gulp.watch(path.join('app/styles', '**/*.scss'), ['scss']);
};

export default watch;
