import { createUser } from '../services/userService';


// const storeToken = (token) => {
//   debugger;
// }
//

export const updateErrors = (errors) => {
  return {
    type: 'UPDATE_ERRORS',
    errors
  }
};

export const signUp = (user) => {
  return dispatch => {
    return createUser(user)
      .then(token => console.log(token))
      .catch(err => console.log(err));
  }
};
