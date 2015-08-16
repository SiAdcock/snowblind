'use strict';

import React from 'react';
import getNodeEnv from './helpers/getNodeEnv';

const HtmlComponent = React.createClass({
  propTypes: {
    markup: React.PropTypes.string,
    dehydratedState: React.PropTypes.object
  },
  includeScripts: function() {
    let appSrc;
    let scriptSrcs = [];

    if (getNodeEnv() === 'development') {
      appSrc = 'http://localhost:8081/build/app.js';
      scriptSrcs.push('http://localhost:35729/livereload.js');
    }
    else {
      appSrc = 'build/assets/bundle.js';
    }
    scriptSrcs.push(appSrc);

    return scriptSrcs.map(function(src) {
      return (
        <script src={src} key={src}/>
      );
    });
  },
  render: function() {
    let state = JSON.stringify(this.props.dehydratedState);
    let markup = this.props.markup;
    return (
      <html>

      <head>
        <title>Todo app</title>
      </head>

      <body>
      <div>
        <h1>Todo</h1>
      </div>

      <div id="container" dangerouslySetInnerHTML={{__html: markup}}></div>

      <script dangerouslySetInnerHTML={{__html: 'window.__data = ' + state + ';'}}/>
      {this.includeScripts()}
      </body>
      </html>
    );
  }
});

export default HtmlComponent;
