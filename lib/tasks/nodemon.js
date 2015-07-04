'use strict';

var $ = require('gulp-load-plugins')();
var nodemon = require('nodemon');

module.exports = function() {
  console.log('Here ye beeeeeeeeeee');
  
  $.livereload.listen();
  nodemon('--debug --exec node index.js');
};
