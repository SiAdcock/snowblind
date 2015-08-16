'use strict';

import { post } from '../fetch';
import { createAction } from 'redux-actions';
import { ADD } from '../constants/actionTypes.js';

const action = createAction(ADD, async payload => {
  const result = await post('/api/add', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  return result;
});

export default action;
