'use strict';

const worldMock = {
  DIRECTIONS: {
    'UP': 'UP'
  }
};
let stateMock;
let movePlayer;
let context;

describe('POST /player/move endpoint', () => {
  beforeEach(() => {
    mockSetup();
    stateMock = {
      player: {
        pos: {
          x: 10,
          y: 5
        },
        speed: 1
      }
    };
    context = {
      request: {
        body: {
          direction: 'UP'
        }
      }
    };
    mockery.registerMock('../state', stateMock);
    mockery.registerMock('../../../app/constants/world', worldMock);
    movePlayer = require('../../../../lib/api/player/move').call(context);
  });
  afterEach(() => {
    mockTearDown();
  });
  it('moves player in the expected direction', () => {
    let expectedY = stateMock.player.pos.y - stateMock.player.speed;
    let actualY;

    movePlayer.next();
    actualY = JSON.parse(context.body).y;
    expect(actualY).to.equal(expectedY);
    expect(stateMock.player.pos.y).to.equal(expectedY);
  });
});
