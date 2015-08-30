'use strict';

window.__SERVER__ = false;

import React from 'react';
import { Provider } from 'react-redux';
import create from '../app/helpers/redux';
import GameContainer from './../app/modules/containers/game';
import playerReducers from '../app/modules/player/reducers';
import consoleReducers from '../app/modules/console/reducers';

const reducers = Object.assign({}, { player: playerReducers }, { log: consoleReducers });

const initialState = window.__data;
const store = create(reducers, initialState);

React.render(
  <Provider store={store}>
    {()=><GameContainer />}
  </Provider>,
  document.getElementById('container')
);
