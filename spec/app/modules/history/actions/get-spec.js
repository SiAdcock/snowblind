'use strict';

const fetchMock = {
  get: sinon.stub()
};
let getHistory;

describe('Get history action', () => {
  beforeEach(() => {
    mockSetup();
    mockery.registerMock('../../../helpers/fetch', fetchMock);
    getHistory = require('../../../../../app/modules/history/actions/get').actionCreator;
  });
  afterEach(() => {
    mockTearDown();
    fetchMock.get.reset();
  });
  it('calls isomorphic fetch with history URL', () => {
    getHistory();

    expect(fetchMock.get.calledWith('/api/history/')).to.be.true;
  });
  it('returns result of isomorphic fetch', () => {
    let expected = [{x: 1, y: 2}];

    fetchMock.get.returns(expected);

    return expect(getHistory()).to.become(expected);
  });
});
