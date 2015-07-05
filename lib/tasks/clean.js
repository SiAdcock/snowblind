'use strict';

import shell from 'shelljs';

const clean = (cb) => {
  shell.rm('-rf', 'build');
  shell.mkdir('-p', 'build');
  cb();
};

export default clean;
