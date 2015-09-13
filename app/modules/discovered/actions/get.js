'use strict';

import { get } from '../../../helpers/fetch';
import { createAction } from 'redux-actions';
import { GET_DISCOVERED } from '../../../constants/actionTypes';

const actionCreator = async () => {
  let url = '/api/discovered/';
  let result = await get(url);

  return result;
};
const getDiscovered = createAction(GET_DISCOVERED, actionCreator);

export { actionCreator };
export default getDiscovered;
