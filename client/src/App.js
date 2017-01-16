import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import './App.css';
import './simple-grid.css'
import { addPlayer, startGame, discardCard, increaseClue } from './actions/hanabiActions'
import Game from './components/Game'

const App = props => {
  return (
    <div className="App">
      <div className="container">
        <Game
          startGame={props.actions.startGame}
          addPlayer={props.actions.addPlayer}
          discardCard={props.actions.discardCard}
          increaseClue={props.actions.increaseClue}
          game={props.game}
          />
      </div>
    </div>
  );
}

function mapStateToProps(state){
  return {game: state.game}
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators({ addPlayer, startGame, discardCard, increaseClue }, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);