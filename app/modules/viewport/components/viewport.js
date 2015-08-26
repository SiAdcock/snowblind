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
  componentDidMount () {
    window.addEventListener('keyup', this.movePlayer.bind(this));
  }
  componentWillUnmount () {
    window.removeEventListener('keyup', this.movePlayer);
  }
  movePlayer (e) {
    let keyCode = e.keyCode || e.which;
    const { dispatch } = this.props;
    const actions = bindActionCreators(actionCreators, dispatch);

    if (!keyCode) {
      return;
    }

    switch (keyCode) {
      case 87:
        console.log(actions.movePlayer({ direction: 'UP' }));
        return;
      case 83:
        actions.movePlayer({ direction: 'DOWN' });
        return;
      case 65:
        actions.movePlayer({ direction: 'LEFT' });
        return;
      case 68:
        actions.movePlayer({ direction: 'RIGHT' });
        return;
    }
  }
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
