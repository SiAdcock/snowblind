'use strict';

const stateMock = {
  player: {
    foo: 'bar'
  }
};
let getRoot;
let context = {};

describe('GET / endpoint', () => {
  beforeEach(() => {
    mockSetup();
    mockery.registerMock('../state', stateMock);
    getRoot = require('../../../../lib/api/root/index').call(context);
  });
  afterEach(() => {
    mockTearDown();
  });
  it('returns state', () => {
    let expected = JSON.stringify(stateMock);

    getRoot.next();
    expect(context.body).to.deep.equal(expected);
  });
});
