'use strict';

const fetchMock = {
  get: sinon.stub()
};
let getTerrain;

describe('Get terrain action', () => {
  beforeEach(() => {
    mockSetup();
    mockery.registerMock('../../../helpers/fetch', fetchMock);
    getTerrain = require('../../../../../app/modules/terrain/actions/get').actionCreator;
  });
  afterEach(() => {
    mockTearDown();
    fetchMock.get.reset();
  });
  it('calls isomorphic fetch with terrain url', () => {
    getTerrain();

    expect(fetchMock.get.calledWith('/api/terrain')).to.be.true;
  });
  it('returns result of isomorphic fetch', () => {
    const expected = [{
      pos: {
        x: 1,
        y: 2
      },
      code: 'T'
    }];

    fetchMock.get.returns(expected);

    return expect(getTerrain()).to.become(expected);
  });
});
