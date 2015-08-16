'use strict';

import loadPlugins from 'gulp-load-plugins';
import nodemon from 'nodemon';

const $ = loadPlugins();
const startNodemon = () => {
  $.livereload.listen();
  nodemon('--debug --exec node --harmony index.js');
};

export default startNodemon;
