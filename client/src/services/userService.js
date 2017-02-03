const = createUser(user) {
  return fetch('/api/v1/users/register')
    .then(response => response.json())
    .catch(err => err);
}

module.exports = {
  createUser,
}
