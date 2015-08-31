'use strict';

var argv = require('yargs').argv;
var spawn = require('child_process').spawn;
var path = require('path');
var mochaPath = path.join(__dirname, '../node_modules/mocha/bin/mocha');
var glob = argv._.length ? argv._[0] : 'spec/**/*.js';

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
