import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import './App.css';
import './simple-grid.css'
import { addPlayer, startGame, discardCard, increaseClue, drawCard, nextTurn, playCard, giveClue } from './actions/hanabiActions'
import { handleSignUp } from './actions/authActions'

const App = props => {
  
  const byChild = () => {
    switch(props.location.pathname){
      case "/signup":
        return React.cloneElement(props.children, {
          auth: props.auth,
          actions: {
            handleSignUp: props.actions.handleSignUp
          }
        });
      case "/games":
        return React.cloneElement(props.children, {
          game: props.game,
        });
      default:
        return;
    }
  };
  
  return (
    <div className="App">
      <div className="container">
        {/*
          <NavBard />
        */}
        <h1>Hello World</h1>
        <div>
          {
            props.children && byChild()
          }
        </div>
      
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
  return {
    game: state.game,
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch){
  return {actions: bindActionCreators({ addPlayer, startGame, discardCard, increaseClue, drawCard, nextTurn, playCard, giveClue, handleSignUp }, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);