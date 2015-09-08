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
const moveSpy = sinon.spy();
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

describe('Viewport component', () => {
  beforeEach(() => {
    mockSetup();
    mockery.registerMock('../../player/components/player', PlayerMock);
    mockery.registerMock('../../history/components/history', HistoryMock);
    mockery.registerMock('../../../constants/keyMap', keyMapConstantsMock);
    mockery.registerMock('../../../constants/world', worldConstantsMock);
    Viewport = require('../../../../../app/modules/world/components/viewport');
  });
  afterEach(() => {
    mockTearDown();
    moveSpy.reset();
  });
  it('renders the viewport', () => {
    const props = {player: playerMock, history: historyMock, zoom: 1};
    const component = createComponent(Viewport, props);

    expect(component.type).to.equal('div');
    expect(component.props.className).to.equal('viewport');
  });
  it('renders a History component for each item in history array', () => {
    const props = {player: playerMock, history: historyMock, zoom: 1};
    const component = createComponent(Viewport, props);
    const [history, ] = component.props.children;

    expect(history[0].type).to.equal(HistoryMock);
    expect(history[1].type).to.equal(HistoryMock);
  });
  it('passes history position to History component', () => {
    const props = {player: playerMock, history: historyMock, zoom: 1};
    const component = createComponent(Viewport, props);
    const [history, ] = component.props.children;

    expect(history[0].props.pos).to.exist;
    expect(history[1].props.pos).to.exist;
  });
  it('passes player position to Player component', () => {
    const props = {player: playerMock, history: historyMock, zoom: 1};
    const component = createComponent(Viewport, props);
    const [, player] = component.props.children;

    expect(player.type).to.equal(PlayerMock);
    expect(player.props.pos).to.exist;
  });
  it('triggers move action on directional keypress', () => {
    Viewport.prototype.props = {move: moveSpy};
    Viewport.prototype.movePlayer({keyCode: 87});

    expect(moveSpy.calledWith({direction: 'UP'})).to.be.true;
  });
  it('does not trigger move action if keypress is not a direction key', () => {
    Viewport.prototype.props = {move: moveSpy};
    Viewport.prototype.movePlayer({keyCode: 9999});

    expect(moveSpy.called).to.be.false;
  });
  it('does not trigger move action if keypress does not have a keycode', () => {
    Viewport.prototype.props = {move: moveSpy};
    Viewport.prototype.movePlayer({foo: 9999});

    expect(moveSpy.called).to.be.false;
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
});
