'use strict';

import bunyan from 'bunyan';

let log = bunyan.createLogger({
  name: 'Todo'
});

export default log;
