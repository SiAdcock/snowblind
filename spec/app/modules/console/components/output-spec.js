'use strict';

import createComponent from '../../../../spec-helpers/createComponent';

let Output;

describe('Console log output', () => {
  beforeEach(() => {
    mockSetup();
    Output = require('../../../../../app/modules/console/components/output');
  });
  afterEach(() => {
    mockTearDown();
  });
  it('renders the log output', () => {
    const logMock = [
      {
        id: 1,
        text: 'You went north'
      },
      {
        id: 2,
        text: 'You went west'
      }
    ];
    const output = createComponent(Output, {log: logMock});
    const [listItem1, listItem2] = output.props.children;

    expect(output.type).to.equal('ul');
    expect(listItem1.props.children).to.equal('You went north');
    expect(listItem1.key).to.equal('1');
    expect(listItem2.props.children).to.equal('You went west');
    expect(listItem2.key).to.equal('2');
  });
});
