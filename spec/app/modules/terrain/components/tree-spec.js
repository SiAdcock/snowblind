'use strict';

import createComponent from '../../../../spec-helpers/createComponent';

let Tree;

describe('Tree component', () => {
  beforeEach(() => {
    Tree = require('../../../../../app/modules/terrain/components/tree');
  });
  it('renders a tree', () => {
    const pos = {
      x: 100,
      y: 200
    };
    const component = createComponent(Tree, {pos: pos});
    const style = component.props.style;

    expect(component.type).to.equal('div');
    expect(component.props.className).to.equal('terrain terrain-tree');
    expect(style.left).to.equal(pos.x);
    expect(style.top).to.equal(pos.y);
  });
});
