'use strict';

import React, { Component } from 'react';

class Tree extends Component {
  render() {
    return (
      <div className="tree" style={{left: this.props.pos.x, top: this.props.pos.y}}/>
    );
  }
}

Tree.propTypes = {
  pos: React.PropTypes.object
};

export default Tree;
