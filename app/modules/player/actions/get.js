'use strict';

import { get } from '../../../helpers/fetch';
import { createAction } from 'redux-actions';
import { GET_PLAYER } from '../../../constants/actionTypes.js';

const actionCreator = async () => {
  let url = '/api/player';
  let result = await get(url);

  return result;
};
const action = createAction(GET_PLAYER, actionCreator);

export { actionCreator };
export default action;
