import React from 'react';

let MyComponent = React.createClass({
  render: () => {
    return (
      <h2>My React Component</h2>
    );
  }
});

React.render(
  <MyComponent />,
  document.getElementById('container')
);
