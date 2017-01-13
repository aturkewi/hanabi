import { initialDeck } from '../lib/initialDeck';

export default function hanabiReducer(state=initialDeck, action) {
  switch(action.type){
    default:
      return state;
  }
}

