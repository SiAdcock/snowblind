'use strict';

import React, { Component } from 'react';

class Output extends Component {
  render () {
    const log = this.props.log || [];
    const logEntries = log.map((entry) => {
      return (
        <li key={entry.id}>{entry.text}</li>
      );
    });

    return (
      <ul className="console-output">
        {logEntries}
      </ul>
    );
  }
}

export default Output;
