import { combineReducers } from 'redux';
import game from './gameReducer';
import auth from './authReducer';

const rootReducer = combineReducers({ 
  game, 
  auth 
})

export default rootReducer;