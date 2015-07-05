import React from 'react';
const env = process.env.NODE_ENV || 'development';

let HtmlComponent = React.createClass({
  includeScripts: function() {
    let appSrc;
    let scriptSrcs = [];

    if (env === 'development') {
      appSrc = 'http://localhost:8081/build/app.js';
      scriptSrcs.push('http://localhost:35729/livereload.js');
    }
    else {
      appSrc = 'build/app.js';
    }
    scriptSrcs.push(appSrc);
    return scriptSrcs.map(function(src) {
      return (
        <script src={src}/>
      );
    });
  },
  render: function() {
    let state = JSON.stringify(this.props.dehydratedState);
    return (
      <html>

      <head>
        <title>.:. snowblind :.:</title>
      </head>

      <body>
      <div>
        <h1>Welcome to snowblind</h1>
      </div>

      <div id="container"></div>

      {this.includeScripts()}
      <script dangerouslySetInnerHTML={{__html: 'window.__data = ' + state + ';'}}/>
      </body>
      </html>
    );
  }
});

export default HtmlComponent;
