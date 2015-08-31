'use strict';

import createComponent from '../../../../spec-helpers/createComponent';

let Player;

describe('Player component', () => {
  beforeEach(() => {
    Player = require('../../../../../app/modules/player/components/player');
  });
  it('renders the player', () => {
    const pos = {
      x: 100,
      y: 200
    };
    const component = createComponent(Player, {pos: pos});
    const style = component.props.style;

    expect(component.type).to.equal('div');
    expect(style.left).to.equal(100);
    expect(style.top).to.equal(200);
  });
});
