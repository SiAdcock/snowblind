'use strict';

import { GET, ADD } from '../constants/actionTypes.js';
import { handleActions } from 'redux-actions';

let todosMap = {};
let getReducer = (state, action) => {
  return action.payload;
};
let addReducer = (state, action) => {
  return state.concat(action.payload);
};

todosMap[GET] = getReducer;
todosMap[ADD] = addReducer;

export default handleActions(todosMap, []);
