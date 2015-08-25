'use strict';

import React from 'react';

class Player {
  render () {
    return (
      <div className="player" style={{left: this.props.pos.x, top: this.props.pos.y}}/>
    );
  }
}

export default Player;
