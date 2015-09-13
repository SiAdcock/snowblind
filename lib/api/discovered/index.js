'use strict';

import state from '../state';

const get = function *() {
  this.body = JSON.stringify(state.discovered);
};

export default get;
