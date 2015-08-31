'use strict';

import React, { Component } from 'react';
import Player from '../../player/components/player';
import { DIRECTIONS } from '../../../constants/keyMap';

class Viewport extends Component {
  componentDidMount () {
    window.removeEventListener('keyup', this.movePlayer.bind(this));
    window.addEventListener('keyup', this.movePlayer.bind(this));
  }
  movePlayer (e) {
    const keyCode = e.keyCode || e.which;
    const direction = keyCode && DIRECTIONS[keyCode];

    if (!keyCode || !direction) {
      return;
    }

    this.props.move({ direction: direction });

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

Viewport.propTypes = {
  player: React.PropTypes.object,
  move: React.PropTypes.func
};

export default Viewport;
