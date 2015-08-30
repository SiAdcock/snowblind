'use strict';

import koa from 'koa';
import bodyparser from 'koa-bodyparser';
import koaRouter from 'koa-router';
import compose from 'koa-compose';

let state = {
  player: {
    pos: {
      x: 100,
      y: 100
    }
  },
  log: [
    {
      id: 1,
      text: 'Welcome to Snowblind'
    }
  ]
};

const router = koaRouter()
  .post('/player/move', function *() {
    switch (this.request.body.direction) {
      case 'UP':
        state.player.pos.y -= 10;
        break;
      case 'DOWN':
        state.player.pos.y += 10;
        break;
      case 'LEFT':
        state.player.pos.x -= 10;
        break;
      case 'RIGHT':
        state.player.pos.x += 10;
        break;
    }

    this.body = JSON.stringify(state.player.pos);
  })
  .get('/player', function *() {
    this.body = JSON.stringify(state.player);
  })
  .get('/log', function *() {
    this.body = JSON.stringify(state.log);
  })
  .get('/', function *() {
    this.body = JSON.stringify(state);
});

const app = koa();

app.use(bodyparser())
  .use(router.routes());

export default function() {
  return compose(app.middleware);
}
