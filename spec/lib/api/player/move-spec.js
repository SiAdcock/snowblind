'use strict';

const worldMock = {
  DIRECTIONS: {
    UP: 'UP',
    DOWN: 'DOWN',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT'
  }
};
let stateMock;
let movePlayerGenerator;

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

    mockery.registerMock('../state', stateMock);
    mockery.registerMock('../../../app/constants/world', worldMock);
    movePlayerGenerator = require('../../../../lib/api/player/move');
  });
  afterEach(() => {
    mockTearDown();
  });
  it('moves player in the UP direction', () => {
    let context = {
      request: {
        body: {
          direction: 'UP'
        }
      }
    };
    let expectedY = stateMock.player.pos.y - stateMock.player.speed;
    let movePlayer = movePlayerGenerator.call(context);
    let actualY;

    movePlayer.next();
    actualY = JSON.parse(context.body).pos.y;
    expect(actualY).to.equal(expectedY);
    expect(stateMock.player.pos.y).to.equal(expectedY);
  });
  it('moves player in the DOWN direction', () => {
    let context = {
      request: {
        body: {
          direction: 'DOWN'
        }
      }
    };
    let expectedY = stateMock.player.pos.y + stateMock.player.speed;
    let movePlayer = movePlayerGenerator.call(context);
    let actualY;

    movePlayer.next();
    actualY = JSON.parse(context.body).pos.y;
    expect(actualY).to.equal(expectedY);
    expect(stateMock.player.pos.y).to.equal(expectedY);
  });
  it('moves player in the LEFT direction', () => {
    let context = {
      request: {
        body: {
          direction: 'LEFT'
        }
      }
    };
    let expectedX = stateMock.player.pos.x - stateMock.player.speed;
    let movePlayer = movePlayerGenerator.call(context);
    let actualX;

    movePlayer.next();
    actualX = JSON.parse(context.body).pos.x;
    expect(actualX).to.equal(expectedX);
    expect(stateMock.player.pos.x).to.equal(expectedX);
  });
  it('moves player in the RIGHT direction', () => {
    let context = {
      request: {
        body: {
          direction: 'RIGHT'
        }
      }
    };
    let expectedX = stateMock.player.pos.x + stateMock.player.speed;
    let movePlayer = movePlayerGenerator.call(context);
    let actualX;

    movePlayer.next();
    actualX = JSON.parse(context.body).pos.x;
    expect(actualX).to.equal(expectedX);
    expect(stateMock.player.pos.x).to.equal(expectedX);
  });
});
