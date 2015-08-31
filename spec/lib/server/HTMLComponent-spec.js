'use strict';

import createComponent from '../../spec-helpers/createComponent';

let HTMLComponent;
const getNodeEnvStub = sinon.stub();
const getChildrenOfBodyElement = (component) => {
  const body = component.props.children[1];
  return body.props.children;
};

describe('Index HTML Component', () => {
  beforeEach(() => {
    mockSetup();
    mockery.registerMock('../../app/helpers/getNodeEnv', getNodeEnvStub);
    HTMLComponent = require('../../../lib/server/HTMLComponent');
  });
  afterEach(() => {
    mockTearDown();
    getNodeEnvStub.reset();
  });
  it('renders its props', () => {
    const props = {
      dehydratedState: {foo: 'bar'},
      markup: 'fake-markup'
    };
    const component = createComponent(HTMLComponent, props);
    const [container, stateScript] = getChildrenOfBodyElement(component);
    const innerHtml = container.props.dangerouslySetInnerHTML.__html;
    const capturedState = stateScript.props.dangerouslySetInnerHTML.__html;

    expect(innerHtml).to.equal('fake-markup');
    expect(capturedState).to.include(JSON.stringify({foo: 'bar'}));
  });
  it('adds dev scripts in dev mode', () => {
    getNodeEnvStub.returns('development');
    const component = createComponent(HTMLComponent);
    const [, , includedScripts] = getChildrenOfBodyElement(component);

    expect(includedScripts.length).to.equal(2);
  });
  it('adds build scripts in production mode', () => {
    getNodeEnvStub.returns('production');
    const component = createComponent(HTMLComponent);
    const [, , includedScripts] = getChildrenOfBodyElement(component);

    expect(includedScripts.length).to.equal(1);
  });
});
