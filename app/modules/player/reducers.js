'use strict';

import { GET_PLAYER, MOVE_PLAYER } from '../../constants/actionTypes.js';
import { handleActions } from 'redux-actions';

let playerMap = {};
const getPlayer = (state, action) => {
  return action.payload;
};
const movePlayer = (state, action) => {
  return action.payload;
};

playerMap[GET_PLAYER] = getPlayer;
playerMap[MOVE_PLAYER] = movePlayer;

export { getPlayer, movePlayer };
export default handleActions(playerMap, {});
