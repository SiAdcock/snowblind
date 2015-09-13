'use strict';

let stateMock;
let addHistoryGenerator;

describe('POST /history/add endpoint', () => {
  beforeEach(() => {
    mockSetup();
    stateMock = {
      history: []
    };

    mockery.registerMock('../state', stateMock);
    addHistoryGenerator = require('../../../../lib/api/history/add');
  });
  afterEach(() => {
    mockTearDown();
  });
  it('Adds new point to history', () => {
    let context = {
      request: {
        body: {
          x: 1, y: 2
        }
      }
    };
    let expected = {
      x: 1, y: 2
    };
    let addHistory = addHistoryGenerator.call(context);
    let actual;

    addHistory.next();
    actual = JSON.parse(context.body);
    expect(actual).to.deep.equal(expected);
    expect(stateMock.history[0]).to.deep.equal(expected);
  });
});
