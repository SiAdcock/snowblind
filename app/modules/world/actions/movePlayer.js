'use strict';

import { post } from '../../../helpers/fetch';
import { createAction } from 'redux-actions';
import { MOVE_PLAYER } from '../../../constants/actionTypes.js';

const action = createAction(MOVE_PLAYER, async payload => {
  const result = await post('/api/world/movePlayer', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  return result;
});

export default action;
