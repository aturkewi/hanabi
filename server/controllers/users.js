const { User } = require('../models');
const Auth = require('../services/auth');
const pry = require('pryjs');

const register = (req, res, next) => {
  User.create(req.body.user)
  .then(user => res.status(200).json({ token: Auth.createToken(user) }))
  .catch(err => res.json(err));
}

module.exports = {
  register,
}
