const { User } = require('../models');
const Auth = require('../services/auth');

const login = (req, res, next) => {
  console.log(req.body);
  User.findOne({ email: req.body.user.email })
  .then((user) => {
    res.user = user;
    user.comparePassword(req.body.user.password);
  })
  .then((response) => {
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
  .catch(err => res.status(500).json(err));
}

module.exports = {
  login,
}
