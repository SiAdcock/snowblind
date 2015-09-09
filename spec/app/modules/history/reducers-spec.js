'use strict';

let getHistory;
let addHistory;

describe('History reducers', () => {
  beforeEach(() => {
    mockSetup();
    getHistory = require('../../../../app/modules/history/reducers').getHistory;
    addHistory = require('../../../../app/modules/history/reducers').addHistory;
  });
  afterEach(() => {
    mockTearDown();
  });
  describe('get history', () => {
    it('updates history state to be the action\'s payload', () => {
      let action = {
        payload: [{ x: 5, y: 6 }]
      };

      expect(getHistory([], action)).to.deep.equal(action.payload);
    });
  });
  describe('add history', () => {
    it('adds the action\'s payload to history on state, returns entire history', () => {
      let action = {
        payload: {
          x: 2, y: 3
        }
      };
      let expected = [{
          x: 2, y: 3
      }];

      expect(addHistory([], action)).to.deep.equal(expected);
    });
  });
});
