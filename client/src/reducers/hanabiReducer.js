import { initialDeck } from '../lib/initialDeck';

export default function hanabiReducer(state={}, action) {
  switch(action.type){
    case "RESET_GAME":
      return {
        deck: initialDeck,
        discard: [],
        played: [],
        players: [],
        clueCounter: 8,
        missesRemaining: 3
      }
    case "ADD_PLAYER":
      console.log(action)
      console.log(state)
      const newPlayer = { name: action.playerName, hand:[] }
      return Object.assign({}, state, {
        players: [...state.players, newPlayer]
      })
    default:
      return state;
  }
}
