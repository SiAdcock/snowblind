'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Viewport from '../world/components/viewport';
import Console from '../console/components/console';
import * as playerActionCreators from '../player/actions/index';
import * as historyActionCreators from '../history/actions/index';

class GameContainer extends Component {
  render() {
    const { dispatch, player, log, history, discovered, terrain } = this.props;
    const playerActions = bindActionCreators(playerActionCreators, dispatch);
    const historyActions = bindActionCreators(historyActionCreators, dispatch);

    return (
      <div>
        <h1>Snowblind</h1>
        <Viewport
          move={playerActions.movePlayer}
          addHistory={historyActions.addHistory}
          player={player}
          history={history}
          terrain={terrain}
          discovered={discovered}
          zoom={1}/>
        <Console log={log}/>
      </div>
    );
  }
}

GameContainer.propTypes = {
  dispatch: React.PropTypes.func,
  player: React.PropTypes.object,
  log: React.PropTypes.array,
  history: React.PropTypes.array,
  discovered: React.PropTypes.array,
  terrain: React.PropTypes.array
};

const select = (state) => {
  return {
    player: state.player,
    log: state.log,
    history: state.history,
    discovered: state.discovered,
    terrain: state.terrain
  };
};

export { GameContainer };
export default connect(select)(GameContainer);
