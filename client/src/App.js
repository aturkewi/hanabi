import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import './App.css';
import './simple-grid.css'
import { addPlayer, startGame, discardCard, increaseClue, drawCard, nextTurn, playCard, giveClue } from './actions/hanabiActions'
import { signUp, updateErrors } from './actions/authActions'
import { createGame } from './actions/gamesActions'

import NavBar from './components/navigation/Navbar';
import Home from './components/Home'

const App = (props) => {

  const byChild = () => {
    switch(props.location.pathname){
      case "/signup":
        return React.cloneElement(props.children, {
          errors: props.auth.errors,
          actions: {
            signUp: props.actions.signUp,
            updateErrors: props.actions.updateErrors
          }
        });
      case "/games":
        return React.cloneElement(props.children, {
          games: props.games,
          actions: { createGame: props.actions.createGame }
        });
      default:
        return;
    }
  };

  return (
    <div className="App">
      <div className="container">
        <NavBar auth={props.auth} />
        <div>
          {
            (props.children && byChild()) || <Home />
          }
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state){
  return {
    game: state.game,
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators({ addPlayer, startGame, discardCard, increaseClue, drawCard, nextTurn, playCard, giveClue, signUp, updateErrors, createGame }, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
