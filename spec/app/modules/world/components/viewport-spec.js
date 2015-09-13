'use strict';

import React, { Component } from 'react';
import createComponent from '../../../../spec-helpers/createComponent';

let Viewport;
const playerMock = {
  pos: {
    x: 10,
    y: 5
  }
};
const historyMock = [
  {
    x: 10,
    y: 5
  },
  {
    x: 11,
    y: 6
  }
];
const terrainMock = [
  {
    pos: {
      x: 1,
      y: 2
    },
    code: 'T'
  }
];
const moveSpy = sinon.spy();
const addHistorySpy = sinon.spy();
const keyMapConstantsMock = {
  DIRECTION_KEYS: {
    '87': 'UP'
  }
};
const worldConstantsMock = {
  POS_PIXEL_RATIO: 20
};
class PlayerMock extends Component {
  render() {
    return (<div/>);
  }
}
class HistoryMock extends Component {
  render() {
    return (<div/>);
  }
}
class TreeMock extends Component {
  render() {
    return (<div/>);
  }
}

describe('Viewport component', () => {
  beforeEach(() => {
    mockSetup();
    mockery.registerMock('../../player/components/player', PlayerMock);
    mockery.registerMock('../../history/components/history', HistoryMock);
    mockery.registerMock('./tree', TreeMock);
    mockery.registerMock('../../../constants/keyMap', keyMapConstantsMock);
    mockery.registerMock('../../../constants/world', worldConstantsMock);
    Viewport = require('../../../../../app/modules/world/components/viewport');
  });
  afterEach(() => {
    mockTearDown();
    moveSpy.reset();
    addHistorySpy.reset();
  });
  describe('renders', () => {
    let props;
    let component;
    let history;
    let player;
    let terrain;

    beforeEach(() => {
      props = {
        player: playerMock,
        history: historyMock,
        terrain: terrainMock,
        zoom: 1
      };
      component = createComponent(Viewport, props);
      [history, player, terrain] = component.props.children;
    });
    it('the viewport', () => {
      expect(component.type).to.equal('div');
      expect(component.props.className).to.equal('viewport');
    });
    it('a Player component', () => {
      expect(player.type).to.equal(PlayerMock);
    });
    it('a History component for each item in history array', () => {
      expect(history[0].type).to.equal(HistoryMock);
      expect(history[1].type).to.equal(HistoryMock);
    });
    it('a Terrain component for each item in terrain array', () => {
      expect(terrain[0].type).to.equal(TreeMock);
    });
    it('and passes history position to each History component', () => {
      expect(history[0].props.pos).to.exist;
      expect(history[1].props.pos).to.exist;
    });
    it('and passes player position to Player component', () => {
      expect(player.props.pos).to.exist;
    });
    it('and passes terrain position to each Terrain component', () => {
      expect(terrain[0].props.pos).to.exist;
    });
  });
  describe('move player', () => {
    it('triggers move and add history actions on directional keypress', () => {
      Viewport.prototype.props = {
        player: {
          pos: {}
        },
        move: moveSpy,
        addHistory: addHistorySpy
      };
      Viewport.prototype.movePlayer({keyCode: 87});

      expect(moveSpy.calledWith({direction: 'UP'})).to.be.true;
      expect(addHistorySpy.calledWith({})).to.be.true;
    });
    it('does not trigger move action if keypress is not a direction key', () => {
      Viewport.prototype.props = {
        player: {
          pos: {}
        },
        move: moveSpy,
        addHistory: addHistorySpy
      };
      Viewport.prototype.movePlayer({keyCode: 9999});

      expect(moveSpy.called).to.be.false;
      expect(addHistorySpy.called).to.be.false;
    });
    it('does not trigger move action if keypress does not have a keycode', () => {
      Viewport.prototype.props = {
        player: {
          pos: {}
        },
        move: moveSpy,
        addHistory: addHistorySpy
      };
      Viewport.prototype.movePlayer({foo: 9999});

      expect(moveSpy.called).to.be.false;
      expect(addHistorySpy.called).to.be.false;
    });
  });
  it('convert position to pixels based on zoom level', () => {
    const zoom = 1;
    const pos = {x: 10, y: 5};
    const expectedX = zoom * worldConstantsMock.POS_PIXEL_RATIO * pos.x;
    const expectedY = zoom * worldConstantsMock.POS_PIXEL_RATIO * pos.y;
    const actual = Viewport.prototype.convertPosToPixels(pos, zoom);

    expect(actual.x).to.equal(expectedX);
    expect(actual.y).to.equal(expectedY);
  });
  describe('remembered history', () => {
    it('returns all history if player\'s memory is greater than or equal to history length', () => {
      const history = [{x: 1, y: 2}, {x: 10, y: 12}];
      const memory = 3;
      const rememberedHistory = Viewport.prototype.getRememberedHistory(history, memory);

      expect(rememberedHistory).to.deep.equal(history);
    });
    it('returns most recent history sliced at player\'s memory if player\'s memory is less than history length', () => {
      const history = [{x: 1, y: 2}, {x: 10, y: 12}];
      const memory = 1;
      const expected = [history[1]];
      const rememberedHistory = Viewport.prototype.getRememberedHistory(history, memory);

      expect(rememberedHistory).to.deep.equal(expected);
    });
  });
  describe('history elements', () => {
    it('creates a history element for each position of remembered history', () => {
      const rememberedHistory = [{x: 1, y: 2}, {x: 10, y: 12}];
      const zoom = 1;
      const historyElements = Viewport.prototype.buildHistoryElements(rememberedHistory, zoom);

      expect(historyElements.length).to.equal(rememberedHistory.length);
      expect(historyElements[0].type).to.equal(HistoryMock);
    });
    it('passes the position to each history element', () => {
      const rememberedHistory = [{x: 1, y: 2}, {x: 10, y: 12}];
      const zoom = 1;
      const historyElements = Viewport.prototype.buildHistoryElements(rememberedHistory, zoom);
      const expectedX = zoom * worldConstantsMock.POS_PIXEL_RATIO * rememberedHistory[0].x;
      const expectedY = zoom * worldConstantsMock.POS_PIXEL_RATIO * rememberedHistory[0].y;

      expect(historyElements[0].props.pos.x).to.equal(expectedX);
      expect(historyElements[0].props.pos.y).to.equal(expectedY);
    });
  });
  describe('terrain elements', () => {
    it('creates a terrain element for each terrain item', () => {
      const zoom = 1;
      const terrainElements = Viewport.prototype.buildTerrainElements(terrainMock, zoom);

      expect(terrainElements.length).to.equal(terrainMock.length);
      expect(terrainElements[0].type).to.equal(TreeMock);
    });
    it('passes the position to each terrain element', () => {
      const zoom = 1;
      const terrainElements = Viewport.prototype.buildTerrainElements(terrainMock, zoom);
      const expectedX = zoom * worldConstantsMock.POS_PIXEL_RATIO * terrainMock[0].pos.x;
      const expectedY = zoom * worldConstantsMock.POS_PIXEL_RATIO * terrainMock[0].pos.y;

      expect(terrainElements[0].props.pos.x).to.equal(expectedX);
      expect(terrainElements[0].props.pos.y).to.equal(expectedY);
    });
  });
});
