'use strict';

import React, { Component } from 'react';
import createComponent from '../../../spec-helpers/createComponent';

let GameContainer;
const reduxMock = {
  bindActionCreators: sinon.stub()
};
const playerActions = {
  action: sinon.stub()
};
const movePlayerSpy = sinon.spy();
const dispatchSpy = sinon.spy();
const propsMock = {
  dispatch: dispatchSpy,
  player: {
    pos: {
      x: 100,
      y: 200
    }
  },
  log: [{
    id: 1,
    text: 'You go north'
  }],
  history: [{
    x: 1,
    y: 2
  }]
};
class ViewportMock extends Component {
  render() {
    return (<div/>);
  }
}
class ConsoleMock extends Component {
  render() {
    return (<div/>);
  }
}

describe('Game container', () => {

  beforeEach(() => {
    mockSetup();
    reduxMock.bindActionCreators.returns({ movePlayer: movePlayerSpy });
    mockery.registerMock('redux', reduxMock);
    mockery.registerMock('../world/components/viewport', ViewportMock);
    mockery.registerMock('../console/components/console', ConsoleMock);
    mockery.registerMock('../player/actions/index', playerActions);
    GameContainer = require('../../../../app/modules/containers/game').GameContainer;
  });
  afterEach(() => {
    mockTearDown();
    reduxMock.bindActionCreators.reset();
    playerActions.action.reset();
    movePlayerSpy.reset();
    dispatchSpy.reset();
  });
  it('renders game container', () => {
    const component = createComponent(GameContainer, propsMock);
    const [title, , ] = component.props.children;

    expect(reduxMock.bindActionCreators.args[0][0].action).to.deep.equal(playerActions.action);
    expect(reduxMock.bindActionCreators.args[0][1]).to.deep.equal(dispatchSpy);
    expect(component.type).to.equal('div');
    expect(title.type).to.equal('h1');
    expect(title.props.children).to.equal('Snowblind');
  });
  it('renders viewport', () => {
    const component = createComponent(GameContainer, propsMock);
    const [, viewport, ] = component.props.children;

    expect(viewport.props.move).to.deep.equal(movePlayerSpy);
    expect(viewport.props.player).to.deep.equal(propsMock.player);
    expect(viewport.props.history).to.deep.equal(propsMock.history);
    expect(viewport.props.zoom).to.equal(1);
  });
  it('renders console', () => {
    const component = createComponent(GameContainer, propsMock);
    const [, , consoleComponent] = component.props.children;

    expect(consoleComponent.props.log).to.deep.equal(propsMock.log);
  });
});
