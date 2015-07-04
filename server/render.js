'use strict';

import React from 'react';
import htmlComponent from '../app/modules/index';

let render = (state) => {
  var props = { dehydratedState: state };
  var html = React.renderToString(React.createElement(htmlComponent, props));
  return html;
};

export default render;
