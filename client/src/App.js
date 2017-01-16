import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { addPlayer, startGame } from './actions/hanabiActions'
import Game from './components/Game'

const App = props => {
  return (
    <div className="App">
      <Game
        startGame={props.actions.startGame}
        addPlayer={props.actions.addPlayer}
        game = {props.game}
        />
    </div>
  );
}

function mapStateToProps(state){
  return {game: state.game}
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators({ addPlayer, startGame }, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);