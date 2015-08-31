'use strict';

let getLog;

describe('Console reducers', () => {
  beforeEach(() => {
    mockSetup();
    getLog = require('../../../../app/modules/console/reducers').getLog;
  });
  afterEach(() => {
    mockTearDown();
  });
  it('updates log state to be the action\'s payload', () => {
    let expected = {
      payload: [{ id: 1, text: 'You have walked into a wall' }]
    };

    expect(getLog(undefined, expected)).to.deep.equal(expected.payload);
  });
});
