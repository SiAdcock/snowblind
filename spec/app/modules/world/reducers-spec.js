'use strict';

let getTerrain;

describe('World reducers', () => {
  beforeEach(() => {
    mockSetup();
    getTerrain = require('../../../../app/modules/world/reducers').getTerrain;
  });
  afterEach(() => {
    mockTearDown();
  });
  describe('get terrain', () => {
    it('updates terrain\'s state to be the action\'s payload', () => {
      let action = {
        payload: {
          pos: {
            x: 1,
            y: 2
          },
          code: 'T'
        }
      };

      expect(getTerrain(undefined, action)).to.deep.equal(action.payload);
    });
  });
});
