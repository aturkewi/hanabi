import { combineReducers } from 'redux';
import hanabiReducer from './hanabiReducer';

const rootReducer = combineReducers({
  game: hanabiReducer
})

export default rootReducer;