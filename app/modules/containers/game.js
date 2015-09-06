'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Viewport from '../world/components/viewport';
import Console from '../console/components/console';
import * as actionCreators from '../player/actions/index';

class GameContainer extends Component {
  render() {
    const { dispatch, player, log } = this.props;
    const actions = bindActionCreators(actionCreators, dispatch);

    return (
      <div>
        <h1>Snowblind</h1>
        <Viewport move={actions.movePlayer} player={player} zoom={1}/>
        <Console log={log}/>
      </div>
    );
  }
}

GameContainer.propTypes = {
  dispatch: React.PropTypes.func,
  player: React.PropTypes.object,
  log: React.PropTypes.array
};

const select = (state) => {
  return {
    player: state.player,
    log: state.log
  };
};

export { GameContainer };
export default connect(select)(GameContainer);
