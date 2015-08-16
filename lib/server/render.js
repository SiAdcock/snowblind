'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import htmlComponent from '../../app/modules/index';
import TodoListContainer from '../../app/modules/components/todoListContainer';

const render = (store) => {
  const markup = React.renderToString(
    <Provider store={store}>
      {()=><TodoListContainer/>}
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
