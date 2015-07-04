'use strict';

import Express from 'express';
import render from './render';
import AppStore from '../app/modules/appStore';
import { createRedux } from 'redux';

const app = new Express();

app.use((req, res) => {
  const redux = createRedux({appStore: AppStore});
  let html = render(redux.getState());
  res.send(html);
});
app.listen(8080, (err) => {
  if (err) {
    console.err(err);
  } else {
    console.log('Server is listening');
  }
});

export default app;
