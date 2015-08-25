'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../world/actions/index';
import Player from './../../player/components/player';

@connect(state => ({
  world: state.world
}))
class Viewport {
  render () {
    const { world } = this.props;

    return (
      <div className="viewport">
        <Player pos={world.player.pos}/>
      </div>
    );
  }
}

export default Viewport;
