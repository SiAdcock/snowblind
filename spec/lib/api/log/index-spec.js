'use strict';

const stateMock = {
  log: [{
    foo: 'bar'
  }]
};
let getLog;
let context = {};

describe('GET /log endpoint', () => {
  beforeEach(() => {
    mockSetup();
    mockery.registerMock('../state', stateMock);
    getLog = require('../../../../lib/api/log/index').call(context);
  });
  afterEach(() => {
    mockTearDown();
  });
  it('returns log', () => {
    let expected = JSON.stringify(stateMock.log);

    getLog.next();
    expect(context.body).to.deep.equal(expected);
  });
});
