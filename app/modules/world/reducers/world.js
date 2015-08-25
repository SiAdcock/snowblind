'use strict';

import { GET_WORLD } from '../../../constants/actionTypes.js';
import { handleActions } from 'redux-actions';

let worldMap = {};
let getWorld = (state, action) => {
  return action.payload;
};

worldMap[GET_WORLD] = getWorld;

export default handleActions(worldMap, []);
