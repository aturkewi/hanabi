export default (state = {
  games: [],
}, action) => {
  switch(action.type){
    case "CREATE_GAME_SUCCESS":
      return Object.assign({}, state, { games: state.games.concat(action.game) });
    default:
      return state;
  }
}
