'use strict';

import { get } from '../../../helpers/fetch';
import { createAction } from 'redux-actions';
import { GET_TERRAIN } from '../../../constants/actionTypes';

const actionCreator = async () => {
  let url = '/api/terrain';
  let result = await get(url);

  return result;
};
const action = createAction(GET_TERRAIN, actionCreator);

export { actionCreator };
export default action;
