import React from 'react';
import Player from './Player';

import AddPlayer from './AddPlayer';

export default (props) => {
  const { players, deck, currentPlayer } = props.game;
  const handleDiscard = (card, event) => {
    event.preventDefault();
    // console.log(props)
    props.discardCard(props.game.players[props.game.currentPlayer], card)
    props.increaseClue(props.clueCounter)
    // props.drawCard(props.deck, props.player)
  }
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
              clueCounter={props.game.clueCounter}
              handleDiscard={handleDiscard}
            />
          )})
        }
      </div>
    </div>
  )
}