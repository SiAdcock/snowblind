'use strict';

import { GET_HISTORY, ADD_HISTORY } from '../../constants/actionTypes';
import { handleActions } from 'redux-actions';

let historyMap = {};
const getHistory = (state, action) => {
  return action.payload;
};
const addHistory = (state, action) => {
  let newState = state.slice();

  newState.push(action.payload);
  return newState;
};

historyMap[GET_HISTORY] = getHistory;
historyMap[ADD_HISTORY] = addHistory;

export { getHistory, addHistory };
export default handleActions(historyMap, []);
