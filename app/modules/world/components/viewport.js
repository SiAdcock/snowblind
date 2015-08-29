'use strict';

import React from 'react';
import Player from './../../player/components/player';

class Viewport {
  componentDidMount () {
    window.removeEventListener('keyup');
    window.addEventListener('keyup', this.movePlayer.bind(this));
  }
  movePlayer (e) {
    let keyCode = e.keyCode || e.which;

    if (!keyCode) {
      return;
    }

    switch (keyCode) {
      case 87:
        this.props.move({ direction: 'UP' });
        return;
      case 83:
        this.props.move({ direction: 'DOWN' });
        return;
      case 65:
        this.props.move({ direction: 'LEFT' });
        return;
      case 68:
        this.props.move({ direction: 'RIGHT' });
        return;
    }
  }
  render () {
    const { player } = this.props;

    return (
      <div className="viewport">
        <Player pos={player.pos}/>
      </div>
    );
  }
}

export default Viewport;
