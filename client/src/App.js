import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import './App.css';
import './simple-grid.css'
import { addPlayer, startGame, discardCard, increaseClue, drawCard, nextTurn, playCard, giveClue } from './actions/hanabiActions'

const App = props => {
  return (
    <div className="App">
      <div className="container">
        {/*
          <NavBard />
        */}
        <h1>Hello World</h1>
        <div>{props.children}</div>
      
        {/*
          <Game
            actions={props.actions}
            game={props.game}
            />
        */}
      
      
      </div>
    </div>
  );
}

function mapStateToProps(state){
  return {game: state.game}
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators({ addPlayer, startGame, discardCard, increaseClue, drawCard, nextTurn, playCard, giveClue }, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);