import React from 'react';

let HtmlComponent = React.createClass({
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

      <script dangerouslySetInnerHTML={{__html: 'window.__data = ' + state + ';'}}/>
      </body>
      </html>
    );
  }
});

export default HtmlComponent;
