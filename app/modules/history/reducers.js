'use strict';

import { GET_HISTORY } from '../../constants/actionTypes';
import { handleActions } from 'redux-actions';

let historyMap = {};
const getHistory = (state, action) => {
  return action.payload;
};

historyMap[GET_HISTORY] = getHistory;

export { getHistory };
export default handleActions(historyMap, []);
