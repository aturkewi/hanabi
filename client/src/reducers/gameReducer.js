import { initialDeck } from '../lib/initialDeck';

export default (state={}, action) => {
  switch(action.type){
    case "RESET_GAME":
      return {
        deck: initialDeck,
        discard: [],
        played: [],
        players: [],
        clueCounter: 8,
        missesRemaining: 3,
        currentPlayerId: 0
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
      const discard = [...state.discard, action.discardedCard]
      players = state.players.slice()
      players[action.player.id] = action.player
      return Object.assign({}, state, { 
        players, 
        deck: action.deck,
        discard,
        clueCounter: action.clueCounter,
        currentPlayerId: action.currentPlayerId
      })
    default:
      return state;
  }
}
