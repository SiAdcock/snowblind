'use strict';

import React, { Component } from 'react';
import Output from './output';

class Console extends Component {
  render () {
    const { log } = this.props;

    return (
      <div className="console">
        <Output log={log}/>
      </div>
    );
  }
}

export default Console;
