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
const moveSpy = sinon.spy();
const keyMapConstantsMock = {
  DIRECTIONS: {
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

describe('Viewport component', () => {
  beforeEach(() => {
    mockSetup();
    mockery.registerMock('../../player/components/player', PlayerMock);
    mockery.registerMock('../../../constants/keyMap', keyMapConstantsMock);
    mockery.registerMock('../../../constants/world', worldConstantsMock);
    Viewport = require('../../../../../app/modules/world/components/viewport');
  });
  afterEach(() => {
    mockTearDown();
    moveSpy.reset();
  });
  it('renders the viewport', () => {
    const component = createComponent(Viewport, {player: playerMock, zoom: 1});

    expect(component.type).to.equal('div');
    expect(component.props.className).to.equal('viewport');
  });
  it('passes player position to Player component', () => {
    const component = createComponent(Viewport, {player: playerMock, zoom: 1});
    const player = component.props.children;

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
  it('convert player position to pixels based on zoom level', () => {
    const zoom = 1;
    const pos = {x: 10, y: 5};
    const expectedX = zoom * worldConstantsMock.POS_PIXEL_RATIO * pos.x;
    const expectedY = zoom * worldConstantsMock.POS_PIXEL_RATIO * pos.y;
    const actual = Viewport.prototype.convertPosToPixels(pos, zoom);

    expect(actual.x).to.equal(expectedX);
    expect(actual.y).to.equal(expectedY);
  });
});
