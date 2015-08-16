'use strict';

import { expect } from 'chai';
import mockery from 'mockery';
import sinon from 'sinon';
import createComponent from '../../spec-helpers/createComponent';

let HTMLComponent;
let getNodeEnvStub = sinon.stub();
const getBodyFromComponent = (component) => {
  return component.props.children[1];
};

describe('Index HTML Component', () => {
  beforeEach(() => {
    mockery.enable({
      warnOnUnregistered: false
    });
    mockery.registerMock('./helpers/getNodeEnv', getNodeEnvStub);
    HTMLComponent = require('../../../app/modules/index');
  });
  afterEach(() => {
    mockery.deregisterAll();
    mockery.disable();
    getNodeEnvStub.reset();
  });
  it('renders its markup props', () => {
    const component = createComponent(HTMLComponent, {markup: 'fake-markup'});
    const container = getBodyFromComponent(component).props.children[1];
    const innerHtml = container.props.dangerouslySetInnerHTML.__html;

    expect(innerHtml).to.equal('fake-markup');
  });
  it('captures its state', () => {
    const fakeState = {foo: 'bar'};
    const component = createComponent(HTMLComponent, {dehydratedState: fakeState});
    const stateScript = getBodyFromComponent(component).props.children[2];
    const capturedState = stateScript.props.dangerouslySetInnerHTML.__html;

    expect(capturedState).to.include(JSON.stringify(fakeState));
  });
  it('adds dev scripts in dev mode', () => {
    getNodeEnvStub.returns('development');
    const component = createComponent(HTMLComponent);
    const includedScripts = getBodyFromComponent(component).props.children[3];

    expect(includedScripts.length).to.equal(2);
  });
  it('adds build scripts in production mode', () => {
    getNodeEnvStub.returns('production');
    const component = createComponent(HTMLComponent);
    const includedScripts = getBodyFromComponent(component).props.children[3];

    expect(includedScripts.length).to.equal(1);
  });
});