'use strict';

const fetchMock = {
  post: sinon.stub()
};
let moveAction;

describe('Move player action', () => {
  beforeEach(() => {
    mockSetup();
    mockery.registerMock('../../../helpers/fetch', fetchMock);
    moveAction = require('../../../../../app/modules/player/actions/move').actionCreator;
  });
  afterEach(() => {
    mockTearDown();
    fetchMock.post.reset();
  });
  describe('isomorphic post', () => {
    it('is called with move player URL', () => {
      moveAction();

      expect(fetchMock.post.calledWith('/api/player/move')).to.be.true;
    });
    it('is called with appropriate headers', () => {
      let expected = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

      moveAction();

      expect(fetchMock.post.args[0][1].headers).to.deep.equal(expected);
    });
    it('is called with direction constant', () => {
      let expected = 'UP';

      moveAction(expected);

      expect(fetchMock.post.args[0][1].body).to.equal(JSON.stringify(expected));
    });
  });
  it('returns result of isomorphic post', () => {
    const expected = { x: 100, y: 100 };

    fetchMock.post.returns(expected);

    return expect(moveAction()).to.become(expected);

  });
});
