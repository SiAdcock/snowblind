'use strict';

import React, { Component } from 'react';
import createComponent from '../../../../spec-helpers/createComponent';

let Viewport;
class PlayerMock extends Component {
  render() {
    return (<div/>);
  }
}

describe('Viewport component', () => {
  beforeEach(() => {
    mockSetup();
    mockery.registerMock('../../player/components/player', PlayerMock);
    Viewport = require('../../../../../app/modules/world/components/viewport');
  });
  afterEach(() => {
    mockTearDown();
  });
  it('renders the viewport', () => {
    const component = createComponent(Viewport, {player: {}});

    expect(component.type).to.equal('div');
    expect(component.props.className).to.equal('viewport');
  });
  it('passes player position to Player component', () => {
    const playerMock = {
      pos: {
        x: 100,
        y: 200
      }
    };
    const component = createComponent(Viewport, {player: playerMock});
    const player = component.props.children;

    expect(player.type).to.equal(PlayerMock);
    expect(player.props.pos).to.deep.equal(playerMock.pos);
  });
  it('triggers move action on keypress', () => {
    const moveSpy = sinon.spy();

    Viewport.prototype.props = { move: moveSpy };
    Viewport.prototype.movePlayer({keyCode: 87});

    expect(moveSpy.calledWith({direction: 'UP'})).to.be.true;
  });
});
