import { getToken } from './authService'

const create = (title) => {
  /*
    NOTE: THIS will only work for dev. This needs to be a dynamic URL for production
  */
  // debugger;
  return fetch('/api/v1/games', {
    method: 'POST',
    headers: {
      'Authorization': `JWT ${getToken()}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: title })
  })
    .then((response) => {
      return response.json()
    })
    .then(data => data)
    .catch(err => err);
}

module.exports = {
  create,
}
