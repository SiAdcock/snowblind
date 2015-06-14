import React from 'react';

var MyComponent = React.createClass({
  render: function() {
    return (
      <h2>My React Component</h2>
    );
  }
});

React.render(
  <MyComponent />,
  document.getElementById('container')
);
