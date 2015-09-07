'use strict';

import glob from 'glob';

const paths = glob.sync('{./app,./lib,./config}/**/*.js', {
  realpath: true
});
const clearCache = () => {
  paths.forEach(function(path) {
    delete require.cache[path];
  });
};

export default clearCache;
