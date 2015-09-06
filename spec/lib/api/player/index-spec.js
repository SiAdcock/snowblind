'use strict';

const stateMock = {
  player: {
    foo: 'bar'
  }
};
let getPlayer;
let context = {};

describe('GET /player endpoint', () => {
  beforeEach(() => {
    mockSetup();
    mockery.registerMock('../state', stateMock);
    getPlayer = require('../../../../lib/api/player/index').call(context);
  });
  afterEach(() => {
    mockTearDown();
  });
  it('returns player', () => {
    let expected = JSON.stringify(stateMock.player);

    getPlayer.next();
    expect(context.body).to.deep.equal(expected);
  });
});
