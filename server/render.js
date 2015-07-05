'use strict';

import React from 'react';
import htmlComponent from '../app/modules/index';
import MyFirstComponent from '../app/modules/myFirstComponent.js';

let render = (state) => {
  var props = {
    dehydratedState: state,
    markup: React.renderToString(React.createElement(MyFirstComponent))
  };
  var html = React.renderToString(React.createElement(htmlComponent, props));
  return html;
};

export default render;
