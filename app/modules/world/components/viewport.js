'use strict';

import React, { Component } from 'react';
import Player from '../../player/components/player';
import History from '../../history/components/history';
import Tree from '../../terrain/components/tree';
import Discovered from '../../discovered/components/discovered';
import { DIRECTION_KEYS } from '../../../constants/keyMap';
import { POS_PIXEL_RATIO, HEIGHT, WIDTH } from '../../../constants/world';

class Viewport extends Component {
  componentDidMount() {
    window.removeEventListener('keyup', this.movePlayer.bind(this));
    window.addEventListener('keyup', this.movePlayer.bind(this));
  }

  movePlayer(e) {
    const keyCode = e.keyCode || e.which;
    const direction = keyCode && DIRECTION_KEYS[keyCode];

    if (!keyCode || !direction) {
      return;
    }

    this.props.addHistory(this.props.player.pos);
    this.props.addDiscovered(this.props.player.pos);
    this.props.move({direction: direction});
  }

  convertPosToPixels(pos, zoom) {
    return {
      x: pos.x * zoom * POS_PIXEL_RATIO,
      y: pos.y * zoom * POS_PIXEL_RATIO
    };
  }

  getVisiblePoints(zoom) {
    let visiblePoints = [];
    let width = 0;
    let height = 0;

    for (; width < WIDTH; width += 1) {
      for (; height < HEIGHT; height += 1) {
        visiblePoints.push({x: width, y: height});
      }
      height = 0;
    }
    return visiblePoints;
  }

  getRememberedHistory(history, memory) {
    let rememberedHistory = history.length < memory ? history.slice() : history.slice(history.length - memory, history.length);
    return rememberedHistory;
  }

  buildHistoryElements(rememberedHistory, zoom) {
    return rememberedHistory.map(function(historyPoint, index) {
      const key = 'history-point-' + index + '-' + historyPoint.x + ',' + historyPoint.y;

      return <History key={key} pos={this.convertPosToPixels(historyPoint, zoom)}/>;
    }.bind(this));
  }

  buildTerrainElements(terrain, zoom) {
    return terrain.map(function(terrainItem, index) {
      const key = 'terrain-item-' + index + '-' + terrainItem.pos.x + ',' + terrainItem.pos.y;

      return <Tree key={key} pos={this.convertPosToPixels(terrainItem.pos, zoom)}/>;
    }.bind(this));
  }

  buildDiscoveredElements(discovered, zoom) {
    return discovered.map(function(discoveredPosition, index) {
      const key = `discovered-position-${index}-${discoveredPosition.x},${discoveredPosition.y}`;

      return <Discovered key={key} pos={this.convertPosToPixels(discoveredPosition, zoom)}/>;
    }.bind(this));
  }

  render() {
    const { player, history, zoom, terrain, discovered } = this.props;
    const playerPos = this.convertPosToPixels(player.pos, zoom);
    const rememberedHistory = this.getRememberedHistory(history, player.memory);
    const historyElements = this.buildHistoryElements(rememberedHistory, zoom);
    const terrainElements = this.buildTerrainElements(terrain, zoom);
    const discoveredElements = this.buildDiscoveredElements(discovered, zoom);

    return (
      <div className="viewport">
        {discoveredElements}
        {historyElements}
        <Player pos={playerPos}/>
        {terrainElements}
      </div>
    );
  }
}

Viewport.propTypes = {
  player: React.PropTypes.object,
  history: React.PropTypes.array,
  move: React.PropTypes.func,
  zoom: React.PropTypes.number,
  terrain: React.PropTypes.array,
  discovered: React.PropTypes.array
};

export default Viewport;
