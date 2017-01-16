import React from 'react';
import Player from './Player';

import AddPlayer from './AddPlayer';

export default (props) => {
  const { players, deck, currentPlayer } = props.game;
  return(
    <div>
      <div className="row">
        <AddPlayer addPlayer={props.addPlayer} />
        {(players.length > 1) ? <button onClick={props.startGame.bind(null, players, deck)}>Start Game</button> : ''}
      </div>
      <div className="row">      
        {players.map((p, i) => <Player key={i} player={p} currentPlayer={currentPlayer === p.id} discardCard={props.discardCard}/>)}
      </div>
    </div>
  )
}