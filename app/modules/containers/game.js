'use strict';

import React, { Component } from 'react';
import Viewport from '../world/components/viewport';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../player/actions/index';

class GameContainer extends Component {
  render() {

    const { dispatch, player } = this.props;
    const actions = bindActionCreators(actionCreators, dispatch);

    return (
      <div>
        <h1>Snowblind</h1>
        <Viewport move={actions.movePlayer} player={player} />
      </div>
    );
  }
}

function select(state) {
  return {
    player: state.world.player
  };
}

export default connect(select)(GameContainer);
