'use strict';

const fetchMock = {
  get: sinon.stub()
};
let getDiscovered;

describe('Get discovered action', () => {
  beforeEach(() => {
    mockSetup();
    mockery.registerMock('../../../helpers/fetch', fetchMock);
    getDiscovered = require('../../../../../app/modules/discovered/actions/get').actionCreator;
  });
  afterEach(() => {
    mockTearDown();
    fetchMock.get.reset();
  });
  it('calls isomorphic fetch with discovered URL', () => {
    getDiscovered();

    expect(fetchMock.get.calledWith('/api/discovered/')).to.be.true;
  });
  it('returns result of isomorphic fetch', () => {
    let expected = [{x: 1, y: 2}];

    fetchMock.get.returns(expected);

    return expect(getDiscovered()).to.become(expected);
  });
});
