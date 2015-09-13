'use strict';

import { GET_TERRAIN } from '../../constants/actionTypes';
import { handleActions } from 'redux-actions';

let worldMap = {};
const getTerrain = (state, action) => {
  return action.payload;
};

worldMap[GET_TERRAIN] = getTerrain;

export { getTerrain };
export default handleActions(worldMap, []);
