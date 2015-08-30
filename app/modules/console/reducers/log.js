'use strict';

import { GET_LOG } from '../../../constants/actionTypes';
import { handleActions } from 'redux-actions';

let logMap = {};
const getLog = (state, action) => {
  return action.payload;
};

logMap[GET_LOG] = getLog;

export default handleActions(logMap, []);
