import React from 'react';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import MyFirstComponent from './../app/modules/myFirstComponent';
import AppStore from './../app/modules/appStore';

const initialState = window.STATE_FROM_SERVER;
const redux = createRedux({ appStore: AppStore }, initialState);

React.render(
  <Provider redux={redux}>
    {()=><CounterApp />}
  </Provider>,
  document.getElementById('App')
);
