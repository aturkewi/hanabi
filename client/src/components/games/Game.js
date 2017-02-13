import React, { Component } from 'react';
import GameService from '../../services/gameService';

class Game extends Component {

  constructor() {
    super();

    this.state = {

    }
  }

  componentWillMount() {
    GameService
      .show(this.props.params.gameId)
      .then((game) => {
        console.log(game);
      })
  }
  
  render() {
    return(
      <div>
      hi
      </div>
    )
  }
}

export default Game;