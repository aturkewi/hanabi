const createUser = (user) => {
  /*
    NOTE: THIS will only work for dev. This needs to be a dynamic URL for production
  */
  // debugger;
  return fetch('/api/v1/users/register', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user: user })
  })
    .then((response) => {
      return response.json()
    })
    .then((token) => {
      return token;
    })
    .catch(err => err);
}

module.exports = {
  createUser,
}
