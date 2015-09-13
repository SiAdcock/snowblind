'use strict';

import state from '../state';
import { DIRECTIONS } from '../../../app/constants/world';

const move = function *() {
  switch (this.request.body.direction) {
    case DIRECTIONS.UP:
      state.player.pos.y -= state.player.speed;
      break;
    case DIRECTIONS.DOWN:
      state.player.pos.y += state.player.speed;
      break;
    case DIRECTIONS.LEFT:
      state.player.pos.x -= state.player.speed;
      break;
    case DIRECTIONS.RIGHT:
      state.player.pos.x += state.player.speed;
      break;
  }

  this.body = JSON.stringify(state.player);
};

export default move;
