import React from 'react';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import MyFirstComponent from './../app/modules/myFirstComponent.js';
import AppStore from './../app/modules/appStore';

const initialState = window.__data;
const redux = createRedux({ appStore: AppStore }, initialState);

React.render(
  <Provider redux={redux}>
    {()=><MyFirstComponent />}
  </Provider>,
  document.getElementById('container')
);
