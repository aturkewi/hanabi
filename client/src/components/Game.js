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
              currentPlayer={currentPlayer === p.id} 
              discardCard={props.discardCard} 
              increaseClue={props.increaseClue} 
              clueCounter={props.game.clueCounter}
              deck={props.game.deck}
            />
          )})
        }
      </div>
    </div>
  )
}