'use strict';

const stateMock = {
  discovered: [{
    x: 1,
    y: 2
  }]
};
let getDiscovered;
let context = {};

describe('GET /discovered endpoint', () => {
  beforeEach(() => {
    mockSetup();
    mockery.registerMock('../state', stateMock);
    getDiscovered = require('../../../../lib/api/discovered/index').call(context);
  });
  afterEach(() => {
    mockTearDown();
  });
  it('returns discovered array', () => {
    let expected = JSON.stringify(stateMock.discovered);

    getDiscovered.next();
    expect(context.body).to.deep.equal(expected);
  });
});
