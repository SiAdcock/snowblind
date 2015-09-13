'use strict';

import createComponent from '../../../../spec-helpers/createComponent';

let Discovered;

describe('Discovered component', () => {
  beforeEach(() => {
    Discovered = require('../../../../../app/modules/discovered/components/discovered');
  });
  it('renders the discovered element', () => {
    const pos = {
      x: 100,
      y: 200
    };
    const component = createComponent(Discovered, {pos: pos});
    const style = component.props.style;

    expect(component.type).to.equal('div');
    expect(style.left).to.equal(pos.x);
    expect(style.top).to.equal(pos.y);
  });
});
