'use strict';

import React from 'react';
import Player from './../../player/components/player';

class Viewport {
  render () {
    return (
      <div className="viewport">
        I am a viewport
        <Player/>
      </div>
    );
  }
}

export default Viewport;
