'use strict';

var argv = require('yargs').argv;
var spawn = require('child_process').spawn;
var path = require('path');
var mochaPath = process.platform === 'win32' ? path.join(__dirname, '../node_modules/.bin/mocha.cmd') : path.join(__dirname, '../node_modules/.bin/mocha');
var glob = argv._.length ? path.join('spec', argv._[0]) : 'spec/**/*.js';

spawn(
  mochaPath,
  [
    glob,
    '--compilers',
    'js:babel/register',
    '--require',
    'spec/spec-helpers/nodeSupport'
  ],
  {
    stdio: 'inherit'
  }
);
