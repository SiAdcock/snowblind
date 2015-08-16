'use strict';

window.__SERVER__ = false;

import React from 'react';
import { Provider } from 'react-redux';
import create from '../app/modules/redux';
import TodoListContainer from './../app/modules/components/todoListContainer';
import * as reducers from './../app/modules/reducers/index';

const initialState = window.__data;
const store = create(reducers, initialState);

React.render(
  <Provider store={store}>
    {()=><TodoListContainer />}
  </Provider>,
  document.getElementById('container')
);
