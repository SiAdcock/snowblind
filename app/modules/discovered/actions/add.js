'use strict';

import { post } from '../../../helpers/fetch';
import { createAction } from 'redux-actions';
import { ADD_DISCOVERED } from '../../../constants/actionTypes.js';

const actionCreator = async (payload) => {
  const result = await post('/api/discovered/add', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  return result;
};
const addDiscovered = createAction(ADD_DISCOVERED, actionCreator);

export { actionCreator };
export default addDiscovered;
