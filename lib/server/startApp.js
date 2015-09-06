'use strict';

import create from './../../app/helpers/redux';
import playerReducers from '../../app/modules/player/reducers';
import logReducers from '../../app/modules/log/reducers';
import { getPlayer } from '../../app/modules/player/actions/index';
import { getLog } from '../../app/modules/log/actions/index';
import render from './render';

const startApp = function *() {
  const reducers = Object.assign({}, { player: playerReducers }, { log: logReducers });
  const store = create(reducers);
  let html;

  yield store.dispatch(getPlayer());
  yield store.dispatch(getLog());
  html = render(store);

  this.body = html;
};

export default startApp;
