'use strict';

import create from './../../app/helpers/redux';
import playerReducers from '../../app/modules/player/reducers';
import logReducers from '../../app/modules/log/reducers';
import historyReducers from '../../app/modules/history/reducers';
import terrainReducers from '../../app/modules/terrain/reducers';
import discoveredReducers from '../../app/modules/discovered/reducers';
import { getPlayer } from '../../app/modules/player/actions/index';
import { getLog } from '../../app/modules/log/actions/index';
import { getHistory } from '../../app/modules/history/actions/index';
import { getTerrain } from '../../app/modules/terrain/actions/index';
import { getDiscovered } from '../../app/modules/discovered/actions/index';
import render from './render';

const startApp = function *() {
  const reducers = Object.assign(
    {},
    {player: playerReducers},
    {log: logReducers},
    {history: historyReducers},
    {terrain: terrainReducers},
    {discovered: discoveredReducers}
  );
  const store = create(reducers);
  let html;

  yield store.dispatch(getPlayer());
  yield store.dispatch(getLog());
  yield store.dispatch(getHistory());
  yield store.dispatch(getTerrain());
  yield store.dispatch(getDiscovered());
  html = render(store);

  this.body = html;
};

export default startApp;
