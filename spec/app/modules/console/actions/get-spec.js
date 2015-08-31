'use strict';

const fetchMock = {
  get: sinon.stub()
};
let getLog;

describe('Get console log action', () => {
  beforeEach(() => {
    mockSetup();
    mockery.registerMock('../../../helpers/fetch', fetchMock);
    getLog = require('../../../../../app/modules/console/actions/get').actionCreator;
  });
  afterEach(() => {
    mockTearDown();
    fetchMock.get.reset();
  });
  it('calls isomorphic fetch with log URL', () => {
    getLog();

    expect(fetchMock.get.calledWith('/api/log/')).to.be.true;
  });
  it('returns result of isomorphic fetch', () => {
    let expected = [{id: 1, text: 'You are on an icy plateau'}];

    fetchMock.get.returns(expected);

    return expect(getLog()).to.become(expected);
  });
});
