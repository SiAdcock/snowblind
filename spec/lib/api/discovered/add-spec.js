'use strict';

let stateMock;
let addDiscoveredGenerator;

describe('POST /discovered/add endpoint', () => {
  beforeEach(() => {
    mockSetup();
    stateMock = {
      discovered: []
    };

    mockery.registerMock('../state', stateMock);
    addDiscoveredGenerator = require('../../../../lib/api/discovered/add');
  });
  afterEach(() => {
    mockTearDown();
  });
  it('Adds new point to discovered array', () => {
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
    let addDiscovered = addDiscoveredGenerator.call(context);
    let actual;

    addDiscovered.next();
    actual = JSON.parse(context.body);
    expect(actual).to.deep.equal(expected);
    expect(stateMock.discovered[0]).to.deep.equal(expected);
  });
});
