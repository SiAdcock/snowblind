'use strict';

import React from 'react';
import htmlComponent from '../app/modules/index';

let render = () => {
  var html = React.renderToString(React.createElement(htmlComponent));
  return html;
};

export default render;
