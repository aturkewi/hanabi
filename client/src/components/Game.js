import React from 'react';
import Player from './Player';
import Card from './Card';

import AddPlayer from './AddPlayer';

export default (props) => {
  const { players, deck, currentPlayerId, clueCounter } = props.game;
  const handleDiscard = (discardedCard, event) => {
    let currentPlayer = players[currentPlayerId]
    event.preventDefault();
    props.actions.discardCard(currentPlayer, discardedCard, clueCounter, deck, players)
  }
  const colors = ['Blue', 'Green', 'Red', 'White', 'Yellow']
  // const sortByColor = cardSet => {
  //   
  // }
  return(
    <div>
      <div className="row">
        <AddPlayer addPlayer={props.actions.addPlayer} />
        {(players.length > 1) ? <button onClick={props.actions.startGame.bind(null, players, deck)}>Start Game</button> : ''}
      </div>
      <div className="row">
        <div className="col-4">
          <h3>Clue Remaining: {props.game.clueCounter}</h3>
        </div>
        <div className="col-4">
          <h3>Misses Remaining: {props.game.missesRemaining}</h3>
        </div>
        <div className="col-4">
          <h3>Cards Remaining: {props.game.deck.length}</h3>
        </div>
      </div>
      <div className="row">      
        {players.map((p, i) => {
          return (<div className="col-2" key={i}>
            <Player key={i} player={p} 
              currentPlayer={currentPlayerId === p.id} 
              clueCounter={props.game.clueCounter}
              handleDiscard={handleDiscard}
            />
          </div>)})
        }
      </div>
      <div className="row">
        <div className="col-6">
          <h3>Played Cards</h3>
          <div className="row">
            {colors.map(color => (
              <div className="col-2">
                <h4>{color}</h4>
                <ul className="cards">
                  {props.game.played.filter(c => c.color === color).map((card,i) => (
                    <Card card={card} key={i}/>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="col-6">
          <h3>Discarded Cards</h3>
          <div className="row">
            {colors.map(color => (
              <div className="col-2">
                <h4>{color}</h4>
                <ul className="cards">
                  {props.game.discard.filter(c => c.color === color).map((card,i) => (
                    <Card card={card} key={i}/>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}