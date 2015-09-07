'use strict';

const stateMock = {
  history: [{
    foo: 'bar'
  }]
};
let getHistory;
let context = {};

describe('GET /history endpoint', () => {
  beforeEach(() => {
    mockSetup();
    mockery.registerMock('../state', stateMock);
    getHistory = require('../../../../lib/api/history/index').call(context);
  });
  afterEach(() => {
    mockTearDown();
  });
  it('returns history', () => {
    let expected = JSON.stringify(stateMock.history);

    getHistory.next();
    expect(context.body).to.deep.equal(expected);
  });
});
