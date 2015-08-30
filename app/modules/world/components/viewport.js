'use strict';

import React, { Component } from 'react';
import Player from './../../player/components/player';

class Viewport extends Component {
  componentDidMount () {
    window.removeEventListener('keyup', this.movePlayer.bind(this));
    window.addEventListener('keyup', this.movePlayer.bind(this));
  }
  movePlayer (e) {
    const keyCode = e.keyCode || e.which;

    if (!keyCode) {
      return;
    }

    //TODO: handle in action?
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
