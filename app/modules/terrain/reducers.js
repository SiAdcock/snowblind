'use strict';

import { GET_TERRAIN } from '../../constants/actionTypes';
import { handleActions } from 'redux-actions';

let terrainMap = {};
const getTerrain = (state, action) => {
  return action.payload;
};

terrainMap[GET_TERRAIN] = getTerrain;

export { getTerrain };
export default handleActions(terrainMap, []);
