'use strict';

import React, { Component } from 'react';

class History extends Component {
  render () {
    return (
      <div className="history" style={{left: this.props.pos.x, top: this.props.pos.y}}/>
    );
  }
}

History.PropTypes = {
  pos: React.PropTypes.object
};

export default History;
