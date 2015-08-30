'use strict';

window.__SERVER__ = false;

import _ from 'lodash';
import React from 'react';
import { Provider } from 'react-redux';
import create from '../app/helpers/redux';
import GameContainer from './../app/modules/containers/game';
import * as playerReducers from '../app/modules/player/reducers/index';
import * as consoleReducers from '../app/modules/console/reducers/index';

const reducers = _.extend({}, playerReducers, consoleReducers);
const initialState = window.__data;
const store = create(reducers, initialState);

React.render(
  <Provider store={store}>
    {()=><GameContainer />}
  </Provider>,
  document.getElementById('container')
);
