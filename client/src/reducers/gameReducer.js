import { initialDeck } from '../lib/initialDeck';

export default (state={}, action) => {
  switch(action.type){
    case "RESET_GAME":
      return {
        deck: initialDeck,
        discard: [],
        played: [],
        players: [],
        clueCounter: 6,
        missesRemaining: 3,
        currentPlayer: 0
      }
    case "ADD_PLAYER":
      const newPlayer = { name: action.playerName, hand:[], id: state.players.length }
      return Object.assign({}, state, {
        players: [...state.players, newPlayer]
      })
    case "START_GAME":
      let { players, deck } = action
      return Object.assign({}, state, { players, deck })
    case "DISCARD_CARD":
      deck = state.deck.filter(c => c !== action.discCard)
      players = state.players.slice()
      players[action.player.id] = action.player
      return Object.assign({}, state, { players, deck })
    case "INCREASE_CLUE":
      console.log(`Clues going up to ${action.clueCounter}`)
      return Object.assign({}, state, { 
        clueCounter: action.clueCounter
      })
    default:
      return state;
  }
}
