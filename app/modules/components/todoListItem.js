'use strict';

import React from 'react';

const TodoListItem = React.createClass({
  render: function() {
    return (
      <li>{this.props.children}</li>
    );
  }
});

export default TodoListItem;
