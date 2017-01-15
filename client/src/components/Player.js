import React from 'react';

const Player = props => {
  return (
    <div>
      <h3>{props.player.name}</h3>
      {console.log(props.player)}
      <ul>
        {props.player.hand.map((c, i)=> `${c.color} ${c.number}`)}
      </ul>
    </div>
  )
}

module.exports = Player;