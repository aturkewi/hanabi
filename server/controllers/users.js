const { User } = require('../models');
const Auth = require('../services/auth');
const pry = require('pryjs');

const register = (req, res, next) => {
  User.create(req.body.user)
  .then((user) => {
    const { username, email, firstName, lastName } = user;
    res.status(200).json({
      token: Auth.createToken(user),
      profile: {
        username,
        email,
        firstName,
        lastName
      },
    });
  })
  .catch(err => res.json(err));
}

module.exports = {
  register,
}
