import { createUser } from '../services/userService';

export const userSignupSuccess = (profile) => {
  return {
    type: 'USER_SIGNUP_SUCCESS',
    profile,
  }
}

const storeToken = (token) => {
  localStorage.token = token;
}

export const updateErrors = (errors) => {
  return {
    type: 'UPDATE_ERRORS',
    errors
  }
};

export const signUp = (user) => {
  return dispatch => {
    return createUser(user)
      .then((data) => {
        if (data.errors) {
          const errors = data.errors.map(error => error.message);
          return dispatch(updateErrors(errors));
        }
        storeToken(data.token);
        const profile = decryptToken(token);
        dispatch(userSignupSuccess(profile));
      })
      .catch(err => err);
  }
};
