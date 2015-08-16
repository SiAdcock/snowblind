'use strict';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

const create = (reducers, initialState) => {
  const reducer = combineReducers(reducers);
  return applyMiddleware(promiseMiddleware)(createStore)(reducer, initialState);
};

export default create;
