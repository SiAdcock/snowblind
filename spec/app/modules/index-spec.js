'use strict';

import { expect } from 'chai';
import mockery from 'mockery';
import sinon from 'sinon';
import createComponent from '../../spec-helpers/createComponent';

let HTMLComponent;
let getNodeEnvStub = sinon.stub();

describe('Index HTML Component', () => {
  beforeEach(() => {
    mockery.enable({
      warnOnUnregistered: false
    });
    mockery.registerMock('../../lib/helpers/getNodeEnv', getNodeEnvStub);
    HTMLComponent = require('../../../app/modules/index');
  });
  afterEach(() => {
    mockery.deregisterAll();
    mockery.disable();
    getNodeEnvStub.reset();
  });
  it('renders its markup props', () => {
    const component = createComponent(HTMLComponent, {markup: 'fake-markup'});
    const body = component.props.children[1];
    const container = body.props.children[1];
    const innerHtml = container.props.dangerouslySetInnerHTML.__html;

    expect(innerHtml).to.equal('fake-markup');
  });
  it('captures its state', () => {
    const fakeState = {foo: 'bar'};
    const component = createComponent(HTMLComponent, {dehydratedState: fakeState});
    const body = component.props.children[1];
    const stateScript = body.props.children[3];
    const capturedState = stateScript.props.dangerouslySetInnerHTML.__html;

    expect(capturedState).to.include(JSON.stringify(fakeState));
  });
  it('adds dev scripts in dev mode', () => {
    getNodeEnvStub.returns('development');
    const component = createComponent(HTMLComponent);
    const body = component.props.children[1];
    const includedScripts = body.props.children[2];

    expect(includedScripts.length).to.equal(2);
  });
  it('adds build scripts in production mode', () => {
    getNodeEnvStub.returns('production');
    const component = createComponent(HTMLComponent);
    const body = component.props.children[1];
    const includedScripts = body.props.children[2];

    expect(includedScripts.length).to.equal(1);
  });
});
