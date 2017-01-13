import React, { Component } from 'react';

import AddPlayer from './AddPlayer';

class Game extends Component {
  render(){
    return(
      <div>
        <AddPlayer addPlayer={this.props.addPlayer} />
      </div>
    )
  }
}

module.exports = Game;