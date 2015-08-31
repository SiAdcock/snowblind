'use strict';

const fetch = {
  get: sinon.stub()
};
let getLogAction;

describe('Get console log', () => {
  beforeEach(() => {
    mockery.enable({
      warnOnUnregistered: false
    });
    mockery.registerMock('../../../helpers/fetch', fetch);
    getLogAction = require('../../../../../app/modules/console/actions/get').actionCreator;
  });
  afterEach(() => {
    mockery.deregisterAll();
    mockery.disable();
    fetch.get.reset();
  });
  it('calls isomorphic fetch with log URL', () => {
    getLogAction();

    expect(fetch.get.calledWith('/api/log/')).to.equal(true);
  });
  it('returns result of isomorphic fetch', () => {
    let expected = [{id: 1, text: 'You are on an icy plateau'}];

    fetch.get.returns(expected);

    return expect(getLogAction()).to.become(expected);
  });
});
