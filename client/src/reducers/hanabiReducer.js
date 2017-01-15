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
      const newPlayer = { name: action.playerName, hand:[] }
      return Object.assign({}, state, {
        players: [...state.players, newPlayer]
      })
    case "START_GAME":
      const { players, deck } = action
      return Object.assign({}, state, { players, deck })
    default:
      return state;
  }
}
