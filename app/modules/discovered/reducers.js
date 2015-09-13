'use strict';

import { GET_DISCOVERED, ADD_DISCOVERED } from '../../constants/actionTypes';
import { handleActions } from 'redux-actions';

let discoveredMap = {};
const getDiscovered = (state, action) => {
  return action.payload;
};
const addDiscovered = (state, action) => {
  let newState = state.slice();

  newState.push(action.payload);
  return newState;
};

discoveredMap[GET_DISCOVERED] = getDiscovered;
discoveredMap[ADD_DISCOVERED] = addDiscovered;

export { getDiscovered, addDiscovered };
export default handleActions(discoveredMap, []);
