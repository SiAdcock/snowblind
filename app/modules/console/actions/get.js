'use strict';

import { get } from '../../../helpers/fetch';
import { createAction } from 'redux-actions';
import { GET_LOG } from '../../../constants/actionTypes';

const getLog = createAction(GET_LOG, async () => {
  let url = '/api/log/';
  let result = await get(url);

  return result;
});

export default getLog;
