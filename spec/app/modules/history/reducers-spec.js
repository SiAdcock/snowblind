'use strict';

let getHistory;

describe('History reducers', () => {
  beforeEach(() => {
    mockSetup();
    getHistory = require('../../../../app/modules/history/reducers').getHistory;
  });
  afterEach(() => {
    mockTearDown();
  });
  it('updates history state to be the action\'s payload', () => {
    let action = {
      payload: [{ x: 5, y: 6 }]
    };

    expect(getHistory(undefined, action)).to.deep.equal(action.payload);
  });
});
