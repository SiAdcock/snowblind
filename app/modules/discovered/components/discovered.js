'use strict';

import React, { Component } from 'react';

class Discovered extends Component {
  render () {
    return (
      <div className="discovered" style={{left: this.props.pos.x, top: this.props.pos.y}}/>
    );
  }
}

Discovered.PropTypes = {
  pos: React.PropTypes.object
};

export default Discovered;
