'use strict';

global.__SERVER__ = true;

import koa from 'koa';
import serve from 'koa-static';
import mount from 'koa-mount';
import favicon from 'koa-favicon';
import log from '../logging/index';
import api from '../api/index';
import startApp from './startApp';
import appConfig from '../../config/app';

let app = koa();

app.use(function *(next) {
  try {
    yield next;
  } catch (err) {
    this.status = err.status || 500;
    this.body = err.message;
    this.app.emit('error', err, this);
  }
});
app.use(favicon('favicon.ico'));
app.use(mount('/build', serve('build')));
app.use(mount('/api', api()));
app.use(startApp);
app.listen(appConfig.port);
log.info('Web server listening on port', appConfig.port);

export default app;
