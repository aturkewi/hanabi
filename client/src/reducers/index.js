import { combineReducers } from 'redux';
import game from './gameReducer';
import auth from './authReducer';
import games from './gamesReducer';

const rootReducer = combineReducers({ 
  game,
  games, 
  auth 
})

export default rootReducer;