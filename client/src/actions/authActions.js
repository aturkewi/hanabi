import { createUser } from '../services/userService';

export const signUp = (user) => {
  return (dispatch) => {
    return createUser(user)
      .then(token => dispatch(storeToken(token))
      .catch(err => dispatch(updateErrors([err]));
  }
};

export const updateErrors = (errors) => {
  return {
    type: 'UPDATE_ERRORS',
    errors
  }
};
