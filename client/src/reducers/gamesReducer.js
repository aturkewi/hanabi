export default (state = {
  games: [],
}, action) => {
  switch(action.type){
    case "CREATE_GAME_SUCCESS":
      return Object.assign({}, state, { games: state.games.concat(action.game) });
    case "ADD_GAMES":
      return Object.assign({}, state, {games: action.games})
    default:
      return state;
  }
}
