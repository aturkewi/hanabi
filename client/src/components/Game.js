import React from 'react';
import Player from './Player';

import AddPlayer from './AddPlayer';

export default (props) => {
  const { players, deck, currentPlayerId, clueCounter } = props.game;
  const handleDiscard = (discardedCard, event) => {
    let currentPlayer = players[currentPlayerId]
    event.preventDefault();
    props.actions.discardCard(currentPlayer, discardedCard, clueCounter, deck, players)
  }
  return(
    <div>
      <div className="row">
        <AddPlayer addPlayer={props.actions.addPlayer} />
        {(players.length > 1) ? <button onClick={props.actions.startGame.bind(null, players, deck)}>Start Game</button> : ''}
      </div>
      <div className="row">
        <div className="col-6">
          <h3>Clue Remaining: {props.game.clueCounter}</h3>
        </div>
        <div className="col-6">
          <h3>Misses Remaining: {props.game.missesRemaining}</h3>
        </div>
      </div>
      <div className="row">      
        {players.map((p, i) => {
          return (
            <Player key={i} player={p} 
              currentPlayer={currentPlayerId === p.id} 
              clueCounter={props.game.clueCounter}
              handleDiscard={handleDiscard}
            />
          )})
        }
      </div>
    </div>
  )
}