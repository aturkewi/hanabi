import React from 'react';
import Card from './Card';

const Player = props => {
  return (
    <div>
      <h3>{props.player.name}</h3>
      <ul>
        {props.player.hand.map((c, i)=> <Card card={c} index={i} currentPlayer={props.currentPlayer}/>)}
      </ul>
    </div>
  )
}

module.exports = Player;