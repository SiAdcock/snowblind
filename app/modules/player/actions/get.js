'use strict';

import { get } from '../../../helpers/fetch';
import { createAction } from 'redux-actions';
import { GET_PLAYER } from '../../../constants/actionTypes.js';

const action = createAction(GET_PLAYER, async () => {
  let url = '/api/player';
  let result = await get(url);

  return result;
});

export default action;
