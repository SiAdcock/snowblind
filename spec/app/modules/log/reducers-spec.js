'use strict';

let getLog;

describe('Log reducers', () => {
  beforeEach(() => {
    mockSetup();
    getLog = require('../../../../app/modules/log/reducers').getLog;
  });
  afterEach(() => {
    mockTearDown();
  });
  it('updates log state to be the action\'s payload', () => {
    let action = {
      payload: [{ id: 1, text: 'You have walked into a wall' }]
    };

    expect(getLog(undefined, action)).to.deep.equal(action.payload);
  });
});
