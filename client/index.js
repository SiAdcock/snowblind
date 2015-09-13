'use strict';

window.__SERVER__ = false;

import React from 'react';
import { Provider } from 'react-redux';
import create from '../app/helpers/redux';
import GameContainer from './../app/modules/containers/game';
import playerReducers from '../app/modules/player/reducers';
import logReducers from '../app/modules/log/reducers';
import historyReducers from '../app/modules/history/reducers';
import terrainReducers from '../app/modules/terrain/reducers';
import discoveredReducers from '../app/modules/discovered/reducers';

const reducers = Object.assign(
  {},
  {player: playerReducers},
  {log: logReducers},
  {history: historyReducers},
  {terrain: terrainReducers},
  {discovered: discoveredReducers}
);

const initialState = window.__data;
const store = create(reducers, initialState);

React.render(
  <Provider store={store}>
    {()=><GameContainer />}
  </Provider>,
  document.getElementById('container')
);
