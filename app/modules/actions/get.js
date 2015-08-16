'use strict';

import { get } from '../fetch';
import { createAction } from 'redux-actions';
import { GET } from '../constants/actionTypes.js';

const action = createAction(GET, async () => {
  let url = '/api/';
  let result = await get(url);
  
  return result;
});

export default action;
