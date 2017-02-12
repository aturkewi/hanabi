import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NewGame from './NewGame';
import { createGame } from '../../actions/gamesActions';
import { Link } from 'react-router';

class Game extends Component {
  render() {
    const { games } = this.props;
    return (
      <div>
        <NewGame createGame={this.props.actions.createGame} />
        <h2>Existing Games</h2>
        <ul>
          {games.map((game, i) => <li key={i}><Link to={`/games/${game.id}`}>{game.title}</Link></li>)}          
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    games: state.games,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ 
      createGame,
    }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
