'use strict';

import React, { Component } from 'react';
import Player from '../../player/components/player';
import { DIRECTIONS } from '../../../constants/keyMap';
import { POS_PIXEL_RATIO } from '../../../constants/world';

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
  convertPosToPixels (pos, zoom) {
    return {
      x: pos.x * zoom * POS_PIXEL_RATIO,
      y: pos.y * zoom * POS_PIXEL_RATIO
    };
  }
  render () {
    const { player, zoom } = this.props;
    const pos = this.convertPosToPixels(player.pos, zoom);

    return (
      <div className="viewport">
        <Player pos={pos}/>
      </div>
    );
  }
}

Viewport.propTypes = {
  player: React.PropTypes.object,
  move: React.PropTypes.func,
  zoom: React.PropTypes.number
};

export default Viewport;
