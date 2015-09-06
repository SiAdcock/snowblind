'use strict';

import state from '../state';

const move = function *() {
  switch (this.request.body.direction) {
    case 'UP':
      state.player.pos.y -= state.player.speed;
      break;
    case 'DOWN':
      state.player.pos.y += state.player.speed;
      break;
    case 'LEFT':
      state.player.pos.x -= state.player.speed;
      break;
    case 'RIGHT':
      state.player.pos.x += state.player.speed;
      break;
  }

  this.body = JSON.stringify(state.player.pos);
};

export default move;
