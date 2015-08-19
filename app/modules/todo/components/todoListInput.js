'use strict';

import React from 'react';

const MyComponent = React.createClass({
  handleAddTodo: function(e) {
    e.preventDefault();
    var newTodo = {
      text: this.refs.todoField.getDOMNode().value
    };
    this.props.add(newTodo);
  },
  render: function() {
    return (
      <form action="/api/addForm" method="post">
        <input type="text" name="text" ref="todoField" placeholder="What to do?"/>
        <button type="submit" onClick={this.handleAddTodo}>Add</button>
      </form>
    );
  }
});

export default MyComponent;
