'use strict';

import { post } from '../../../helpers/fetch';
import { createAction } from 'redux-actions';
import { MOVE_PLAYER } from '../../../constants/actionTypes.js';

const actionCreator = async (payload) => {
  const result = await post('/api/player/move', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  return result;
};
const action = createAction(MOVE_PLAYER, actionCreator);

export { actionCreator };
export default action;
