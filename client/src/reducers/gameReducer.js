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
    case "INCREASE_CLUE":
      console.log("Increasing Clue")
      return Object.assign({}, state, { 
        clueCounter: action.clueCounter
      })
    case "DRAW_CARD":
      console.log("The current player is: ", action.player);
      players = state.players.slice()
      players[action.player.id] = action.player
      console.log(players)
      return Object.assign({}, state, { players, deck: action.deck })
    case "NEXT_TURN":
      return Object.assign({}, state, {currentPlayer: action.currentPlayer})
    default:
      return state;
  }
}
