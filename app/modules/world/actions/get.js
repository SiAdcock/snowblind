'use strict';

import { get } from '../../../helpers/fetch';
import { createAction } from 'redux-actions';
import { GET } from '../../../constants/actionTypes.js';

const action = createAction(GET, async () => {
  let url = '/api/world';
  let result = await get(url);

  return result;
});

export default action;
