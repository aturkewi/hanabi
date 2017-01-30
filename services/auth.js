const jwt = require('jsonwebtoken');
const _ = require('lodash');
const secret = require('../config').auth.secret;

const authorize = (req, res, next) => {
  const token = findToken(req);
  if (token) {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(403).json({ message: 'You do not have a valid token!' })
      } else {
        res.token = decoded;
        next();
      }
    })
  } else {
    return res.status(403).json({ message: 'This request reqires a token!' })
  }
}

const authorizedOwner = (req, res, next) => {
  User
    .findOne({ id: req.params.id })
    .then((user) => {
      if (user.id === res.token.id) {
        next();
      } else {
        res.status(403).json({ message: 'You are not authorized for this request!' });
      }
    });
}

const findToken = (req) => {
  return req.body.token || req.query.token || req.headers['authorization'];
}

const createToken = (user) => {
  return jwt.sign(_.omit(user, ['password']), secret, { expiresIn: '2h' });
}

module.exports = {
  createToken,
  authorize,
  authorizedOwner,
}
