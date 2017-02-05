export default (state=[], action) => {
  switch(action.type){
    case "CREATE_GAME_SUCCESS":
      return [...state, action.game.title]
    default:
      return state;
  }
}
