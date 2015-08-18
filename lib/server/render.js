'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import htmlComponent from '../../app/modules/index';
import GameContainer from '../../app/modules/containers/game';

const render = (store) => {
  const markup = React.renderToString(
    <Provider store={store}>
      {()=><GameContainer/>}
    </Provider>
  );
  const props = {
    dehydratedState: store.getState(),
    markup: markup
  };
  const html = React.renderToString(React.createElement(htmlComponent, props));
  return html;
};

export default render;
