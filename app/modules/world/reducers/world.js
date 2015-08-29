'use strict';

import { GET_WORLD, MOVE_PLAYER } from '../../../constants/actionTypes.js';
import { handleActions } from 'redux-actions';

let worldMap = {};
let getWorld = (state, action) => {
  return action.payload;
};
let movePlayer = (state, action) => {
  return {
    player: {
      pos: action.payload
    }
  };
};

worldMap[GET_WORLD] = getWorld;
worldMap[MOVE_PLAYER] = movePlayer;

export default handleActions(worldMap, {});
