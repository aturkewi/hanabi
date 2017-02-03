export default (state = {
  errors: [],
  /*
  isAuthenticated: checkToken(),
  profile: getProfile(),
  errors: [],
  */
}, action) => {
  switch(action.type){
    case 'UPDATE_ERRORS':
    debugger;
      return Object.assign({}, state, { errors: action.errors })
    default:
      return state
  }
}
