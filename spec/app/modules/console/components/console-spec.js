'use strict';

import React, { Component } from 'react';
import createComponent from '../../../../spec-helpers/createComponent';

let Console;
class OutputMock extends Component {
  render() {
    return (<div/>);
  }
}

describe('Console component', () => {
  beforeEach(() => {
    mockSetup();
    mockery.registerMock('./output', OutputMock);
    Console = require('../../../../../app/modules/console/components/console');
  });
  afterEach(() => {
    mockTearDown();
  });
  it('renders the console', () => {
    const component = createComponent(Console);

    expect(component.type).to.equal('div');
    expect(component.props.className).to.equal('console');
  });
  it('passes the log to the console output', () => {
    const logMock = [{id: 1, text: 'You go north'}];
    const component = createComponent(Console, {log: logMock});
    const output = component.props.children;

    expect(output.type).to.equal(OutputMock);
    expect(output.props.log).to.deep.equal(logMock);
  });
});
