import React from 'react';
import NewGame from './NewGame';

export default (props) => {
  return (
    <div>
      Games Go Here
      <NewGame createGame={props.actions.createGame} />
    </div>
  )
}
