'use strict';

import React, { Component } from 'react';
import getNodeEnv from '../../app/helpers/getNodeEnv';

class HtmlComponent extends Component {
  includeScripts() {
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

    return scriptSrcs.map((src) => {
      return (
        <script src={src} key={src}/>
      );
    });
  }

  render() {
    let state = JSON.stringify(this.props.dehydratedState);
    let markup = this.props.markup;

    return (
      <html>

      <head>
        <title>.:. Snowblind :.:</title>
        <link rel="stylesheet" type="text/css" href="/build/styles/styles.css"/>
      </head>

      <body>
      <div id="container" dangerouslySetInnerHTML={{__html: markup}}></div>

      <script dangerouslySetInnerHTML={{__html: 'window.__data = ' + state + ';'}}/>
      {this.includeScripts()}
      </body>
      </html>
    );
  }
}

HtmlComponent.propTypes = {
  markup: React.PropTypes.string,
  dehydratedState: React.PropTypes.object
};

export default HtmlComponent;
