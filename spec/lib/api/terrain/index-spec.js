'use strict';

const stateMock = {
  terrain: [
    {
      pos: {
        x: 1,
        y: 2
      },
      code: 'T'
    }
  ]
};
let getTerrain;
let context = {};

describe('GET /terrain endpoint', () => {
  beforeEach(() => {
    mockSetup();
    mockery.registerMock('../state', stateMock);
    getTerrain = require('../../../../lib/api/terrain/index').call(context);
  });
  afterEach(() => {
    mockTearDown();
  });
  it('returns terrain', () => {
    let expected = JSON.stringify(stateMock.terrain);

    getTerrain.next();
    expect(context.body).to.deep.equal(expected);
  });
});
