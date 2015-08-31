'use strict';

const fetchMock = {
  get: sinon.stub()
};
let getPlayer;

describe('Get player action', () => {
  beforeEach(() => {
    mockSetup();
    mockery.registerMock('../../../helpers/fetch', fetchMock);
    getPlayer = require('../../../../../app/modules/player/actions/get').actionCreator;
  });
  afterEach(() => {
    mockTearDown();
    fetchMock.get.reset();
  });
  it('calls isomorphic fetch with player URL', () => {
    getPlayer();

    expect(fetchMock.get.calledWith('/api/player')).to.be.true;
  });
  it('returns result of isomorphic fetch', () => {
    const expected = { pos: { x: 100, y: 100 } };

    fetchMock.get.returns(expected);

    return expect(getPlayer()).to.become(expected);
  });
});
