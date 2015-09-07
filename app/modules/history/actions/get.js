'use strict';

import { get } from '../../../helpers/fetch';
import { createAction } from 'redux-actions';
import { GET_HISTORY } from '../../../constants/actionTypes';

const actionCreator = async () => {
  let url = '/api/history/';
  let result = await get(url);

  return result;
};
const getHistory = createAction(GET_HISTORY, actionCreator);

export { actionCreator };
export default getHistory;
