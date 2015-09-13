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
const historyActions = {
  action: sinon.stub()
};
const movePlayerSpy = sinon.spy();
const addHistorySpy = sinon.spy();
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
  }],
  terrain: [{
    pos: {
      x: 1,
      y: 3
    },
    code: 'T'
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
    reduxMock.bindActionCreators.returns({
      movePlayer: movePlayerSpy,
      addHistory: addHistorySpy
    });
    mockery.registerMock('redux', reduxMock);
    mockery.registerMock('../world/components/viewport', ViewportMock);
    mockery.registerMock('../console/components/console', ConsoleMock);
    mockery.registerMock('../player/actions/index', playerActions);
    mockery.registerMock('../history/actions/index', historyActions);
    GameContainer = require('../../../../app/modules/containers/game').GameContainer;
  });
  afterEach(() => {
    mockTearDown();
    reduxMock.bindActionCreators.reset();
    playerActions.action.reset();
    movePlayerSpy.reset();
    addHistorySpy.reset();
    dispatchSpy.reset();
  });
  it('renders game container', () => {
    const component = createComponent(GameContainer, propsMock);
    const [title, , ] = component.props.children;

    expect(component.type).to.equal('div');
    expect(title.type).to.equal('h1');
    expect(title.props.children).to.equal('Snowblind');
  });
  it('creates player and history actions', () => {
    createComponent(GameContainer, propsMock);

    expect(reduxMock.bindActionCreators.calledTwice).to.be.true;
  });
  it('renders viewport', () => {
    const component = createComponent(GameContainer, propsMock);
    const [, viewport, ] = component.props.children;

    expect(viewport.props.move).to.deep.equal(movePlayerSpy);
    expect(viewport.props.player).to.deep.equal(propsMock.player);
    expect(viewport.props.history).to.deep.equal(propsMock.history);
    expect(viewport.props.terrain).to.deep.equal(propsMock.terrain);
    expect(viewport.props.zoom).to.equal(1);
  });
  it('renders console', () => {
    const component = createComponent(GameContainer, propsMock);
    const [, , consoleComponent] = component.props.children;

    expect(consoleComponent.props.log).to.deep.equal(propsMock.log);
  });
});
