'use strict';

var $ = require('gulp-load-plugins')();
var nodemon = require('nodemon');

module.exports = function() {
  $.livereload.listen();
  nodemon('--debug --exec node index.js');
};
