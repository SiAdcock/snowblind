'use strict';

var shell = require('shelljs');

module.exports = function(cb) {
  shell.rm('-rf', 'build');
  shell.mkdir('-p', 'build');
  cb();
};
