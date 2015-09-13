'use strict';

import state from '../state';

const add = function *() {
  state.discovered.push(this.request.body);

  this.body = JSON.stringify(this.request.body);
};

export default add;
