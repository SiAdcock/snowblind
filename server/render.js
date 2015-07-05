'use strict';

import React from 'react';
import { createRedux } from 'redux';
import AppStore from '../app/modules/appStore';
import htmlComponent from '../app/modules/index';
import MyFirstComponent from '../app/modules/myFirstComponent.js';

const render = () => {
  const redux = createRedux({appStore: AppStore});
  const props = {
    dehydratedState: redux.getState(),
    markup: React.renderToString(React.createElement(MyFirstComponent))
  };
  const html = React.renderToString(React.createElement(htmlComponent, props));
  return html;
};

export default render;
