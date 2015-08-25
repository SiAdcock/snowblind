'use strict';

import { GET } from '../../../constants/actionTypes.js';
import { handleActions } from 'redux-actions';

let worldMap = {};
let getWorld = (state, action) => {
  return action.payload;
};

worldMap[GET] = getWorld;

export default handleActions(worldMap, []);
