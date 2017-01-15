import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { addPlayer, startGame } from './actions/hanabiActions'
import Game from './components/Game'

class App extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className="App">
        <Game
          startGame = {this.props.actions.startGame}
          addPlayer={this.props.actions.addPlayer}
          game = {this.props.game}
          />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {game: state.game}
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators({ addPlayer, startGame }, dispatch)};
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);
const connectedComponent = connector(App)

export default connectedComponent;