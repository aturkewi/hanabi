import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NewGame from './NewGame';
import { createGame } from '../../actions/gamesActions';

class Game extends Component {

  render() {
    return (
      <div>
        Games:
        <NewGame createGame={this.props.actions.createGame} />
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
