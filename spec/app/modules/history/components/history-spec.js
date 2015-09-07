'use strict';

import createComponent from '../../../../spec-helpers/createComponent';

let History;

describe('History component', () => {
  beforeEach(() => {
    History = require('../../../../../app/modules/history/components/history');
  });
  it('renders the history element', () => {
    const pos = {
      x: 1,
      y: 2
    };
    const component = createComponent(History, {pos: pos});
    const style = component.props.style;

    expect(component.type).to.equal('div');
    expect(style.left).to.equal(1);
    expect(style.top).to.equal(2);
  });
});
