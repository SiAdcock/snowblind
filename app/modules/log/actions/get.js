'use strict';

import { get } from '../../../helpers/fetch';
import { createAction } from 'redux-actions';
import { GET_LOG } from '../../../constants/actionTypes';

const actionCreator = async () => {
  let url = '/api/log/';
  let result = await get(url);

  return result;
};
const getLog = createAction(GET_LOG, actionCreator);

export { actionCreator };
export default getLog;
