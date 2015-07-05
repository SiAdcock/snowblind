import React from 'react';

let HtmlComponent = React.createClass({
  render: () => {
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

      </body>
      </html>
    );
  }
});

export default HtmlComponent;
