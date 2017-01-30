const { User } = require('../models');
const Auth = require('../services/auth');

const register = (req, res, next) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
  .then(user => res.status(200).json({ token: Auth.createToken(user) }))
  .catch(err => res.json(err));
}

module.exports = {
  register,
}
