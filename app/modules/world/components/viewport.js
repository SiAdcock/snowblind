'use strict';

import React, { Component } from 'react';
import Player from '../../player/components/player';
import History from '../../history/components/history';
import { DIRECTION_KEYS } from '../../../constants/keyMap';
import { POS_PIXEL_RATIO } from '../../../constants/world';

class Viewport extends Component {
  componentDidMount () {
    window.removeEventListener('keyup', this.movePlayer.bind(this));
    window.addEventListener('keyup', this.movePlayer.bind(this));
  }
  movePlayer (e) {
    const keyCode = e.keyCode || e.which;
    const direction = keyCode && DIRECTION_KEYS[keyCode];

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
    const { player, history, zoom } = this.props;
    const playerPos = this.convertPosToPixels(player.pos, zoom);
    const historyElements = history.map(function(historyPoint) {
      const key = 'history-point-' + historyPoint.x + ',' + historyPoint.y;
      return <History key={key} pos={this.convertPosToPixels(historyPoint, zoom)}/>;
    }.bind(this));

    return (
      <div className="viewport">
        {historyElements}
        <Player pos={playerPos}/>
      </div>
    );
  }
}

Viewport.propTypes = {
  player: React.PropTypes.object,
  history: React.PropTypes.array,
  move: React.PropTypes.func,
  zoom: React.PropTypes.number
};

export default Viewport;
