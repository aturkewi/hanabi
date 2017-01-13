import { initialDeck } from '../lib/initialDeck';

export default function hanabiReducer(state={}, action) {
  switch(action.type){
    case "RESET_GAME":
      console.log("hit reset game in reducer")
      return {
        deck: initialDeck,
        discard: [],
        played: [],
        players: [],
        clueCounter: 8,
        missesRemaining: 3
      }
    default:
      return state;
  }
}

const getRandCard = (deck) =>{
  let randNum = Math.floor(Math.random()*deck.length);
  return deck.splice(randNum,1)[0]
}