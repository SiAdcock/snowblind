'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index';
import TodoList from './todoList';
import TodoListInput from './todoListInput';

@connect(state => ({
  todos: state.todos
}))
class TodoListContainer {
  render() {
    const { dispatch, todos } = this.props;
    const actions = bindActionCreators(actionCreators, dispatch)

    return (
      <div>
        <TodoList todos={todos} />
        <TodoListInput add={actions.add} />
      </div>
    );
  }
};

export default TodoListContainer;
