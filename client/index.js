'use strict';

window.__SERVER__ = false;

import React from 'react';
import { Provider } from 'react-redux';
import create from '../app/modules/redux';
import GameContainer from './../app/modules/containers/game';
import * as reducers from './../app/modules/reducers/index';

const initialState = window.__data;
const store = create(reducers, initialState);

React.render(
  <Provider store={store}>
    {()=><GameContainer />}
  </Provider>,
  document.getElementById('container')
);
