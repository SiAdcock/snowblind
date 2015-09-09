'use strict';

import { post } from '../../../helpers/fetch';
import { createAction } from 'redux-actions';
import { ADD_HISTORY } from '../../../constants/actionTypes.js';

const actionCreator = async (payload) => {
  const result = await post('/api/history/add', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  return result;
};
const action = createAction(ADD_HISTORY, actionCreator);

export { actionCreator };
export default action;
