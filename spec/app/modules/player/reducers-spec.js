'use strict';

let getPlayer;
let movePlayer;

describe('Player reducers', () => {
  beforeEach(() => {
    mockSetup();
    getPlayer = require('../../../../app/modules/player/reducers').getPlayer;
    movePlayer = require('../../../../app/modules/player/reducers').movePlayer;
  });
  afterEach(() => {
    mockTearDown();
  });
  describe('get player', () => {
    it('updates player state to be the action\'s payload', () => {
      let action = {
        payload: {
          pos: {
            x: 200, y: 300
          }
        }
      };

      expect(getPlayer(undefined, action)).to.deep.equal(action.payload);
    });
  });
  describe('move player', () => {
    it('updates player\'s position to the action\'s payload', () => {
      let action = {
        payload: {
          x: 200, y: 300
        }
      };
      let expected = {
        pos: {
          x: 200, y: 300
        }
      };

      expect(movePlayer(undefined, action)).to.deep.equal(expected);
    });
  });
});
