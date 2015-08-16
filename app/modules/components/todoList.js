'use strict';

import React from 'react';
import TodoListItem from './todoListItem.js';

const TodoList = React.createClass({
  render: function() {
    const listItemHtml = this.props.todos.map((listItem) => {
      return (
        <TodoListItem key={listItem.id}>{listItem.text}</TodoListItem>
      );
    });
    return (
      <ul>
        {listItemHtml}
      </ul>
    );
  }
});

export default TodoList;
