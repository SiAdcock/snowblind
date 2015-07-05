'use strict';

import Express from 'express';
import serveStatic from 'serve-static';
import path from 'path';
import render from './render';
import AppStore from '../app/modules/appStore';
import { createRedux } from 'redux';

const app = new Express();

app.use('/build', Express.static(path.join(process.cwd(), 'build')));
app.use((req, res) => {
  const redux = createRedux({appStore: AppStore});
  let html = render(redux.getState());
  res.send(html);
});
app.listen(8080, (err) => {
  if (err) {
    console.err(err);
  }
  else {
    console.log('web server listening on port 8080');
  }
});

export default app;
