'use strict';

require('babel/register')({
  optional: ['es7.asyncFunctions', 'es7.decorators']
});
require('./lib/server');
