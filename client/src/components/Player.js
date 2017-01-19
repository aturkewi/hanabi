import React from 'react';
import Card from './Card';
import '../Player.css'

const Player = props => {
  // const handleDiscard = (card, event) => {
  //   event.preventDefault();
  //   props.discardCard(props.player, card)
  //   props.increaseClue(props.clueCounter)
  //   // props.drawCard(props.deck, props.player)
  // }
  return (
    <div className={props.currentPlayer ? "current-player col-2" : "col-2"}>
      <h3>{props.player.name}</h3>
      <ul>
        {props.player.hand.map((c, i)=> <Card card={c} key={i} currentPlayer={props.currentPlayer} handleDiscard={props.handleDiscard}/>)}
      </ul>
    </div>
  )
}

module.exports = Player;