import React, { Component } from 'react';
import Player from './Player';

import AddPlayer from './AddPlayer';

class Game extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const { players, deck } = this.props.game;
    return(
      <div>
        <AddPlayer addPlayer={this.props.addPlayer} />
        {(players.length > 1) ? <button onClick={this.props.startGame.bind(null, players, deck)}>Start Game</button> : ''}
        {players.map((p, i) => <Player key={i} player={p}/>)}
      </div>
    )
  }
}

module.exports = Game;