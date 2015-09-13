'use strict';

const fetchMock = {
  post: sinon.stub()
};
let addAction;

describe('Add discovered action', () => {
  beforeEach(() => {
    mockSetup();
    mockery.registerMock('../../../helpers/fetch', fetchMock);
    addAction = require('../../../../../app/modules/discovered/actions/add').actionCreator;
  });
  afterEach(() => {
    mockTearDown();
    fetchMock.post.reset();
  });
  describe('isomorphic post', () => {
    it('is called with discovered add URL', () => {
      addAction();

      expect(fetchMock.post.calledWith('/api/discovered/add')).to.be.true;
    });
    it('is called with appropriate headers', () => {
      let expected = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

      addAction();

      expect(fetchMock.post.args[0][1].headers).to.deep.equal(expected);
    });
    it('is called with discovered point', () => {
      let expected = { x: 1, y: 2 };

      addAction(expected);

      expect(fetchMock.post.args[0][1].body).to.deep.equal(JSON.stringify(expected));
    });
  });
  it('returns result of isomorphic post', () => {
    const expected = [{ x: 1, y: 2 }];

    fetchMock.post.returns(expected);

    return expect(addAction()).to.become(expected);

  });
});
