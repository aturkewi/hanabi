const { User } = require('../models')

const login = (req, res, next) => {
  console.log(req.body);
  User.findOne({ email: req.body.user.email })
  .then((user) => {
    res.user = user;
    user.comparePassword(req.body.user.password);
  })
  .then(response => res.status(200).json(res.user))
  .catch(err => res.status(500).json(err));
}

module.exports = {
  login,
}
