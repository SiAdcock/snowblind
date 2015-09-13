'use strict';

import koa from 'koa';
import bodyparser from 'koa-bodyparser';
import koaRouter from 'koa-router';
import compose from 'koa-compose';
import playerMove from './player/move';
import player from './player/index';
import log from './log/index';
import historyAdd from './history/add';
import history from './history/index';
import discoveredAdd from './discovered/add';
import discovered from './discovered/index';
import terrain from './terrain/index';
import root from './root/index';

const router = koaRouter()
  .post('/player/move', playerMove)
  .get('/player', player)
  .get('/log', log)
  .post('/history/add', historyAdd)
  .get('/history', history)
  .post('/discovered/add', discoveredAdd)
  .get('/discovered', discovered)
  .get('/terrain', terrain)
  .get('/', root);

const app = koa();

app.use(bodyparser())
  .use(router.routes());

export default function() {
  return compose(app.middleware);
}
