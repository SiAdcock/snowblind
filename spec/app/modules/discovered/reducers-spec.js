'use strict';

let getDiscovered;
let addDiscovered;

describe('Discovered reducers', () => {
  beforeEach(() => {
    mockSetup();
    getDiscovered = require('../../../../app/modules/discovered/reducers').getDiscovered;
    addDiscovered = require('../../../../app/modules/discovered/reducers').addDiscovered;
  });
  afterEach(() => {
    mockTearDown();
  });
  describe('get discovered', () => {
    it('updates discovered state to be the action\'s payload', () => {
      let action = {
        payload: [{ x: 5, y: 6 }]
      };

      expect(getDiscovered([], action)).to.deep.equal(action.payload);
    });
  });
  describe('add discovered', () => {
    it('adds the action\'s payload to discovered on state, returns entire discovered array', () => {
      let action = {
        payload: {
          x: 2, y: 3
        }
      };
      let expected = [{
          x: 2, y: 3
      }];

      expect(addDiscovered([], action)).to.deep.equal(expected);
    });
  });
});
