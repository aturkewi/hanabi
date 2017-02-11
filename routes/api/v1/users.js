import _ from 'lodash';
import jwt from 'jwt-simple';
import pry from 'pryjs'

module.exports = (app) => {
  const User = app.db.models.User;
  const authenticate = app.services.auth.passport.authenticate;
  const jwtSecret = app.libs.config.jwtSecret;

  app.route("/api/v1/users")
    .post((req, res) => {
      User
        .create(_.pick(req.body, ['firstName', 'lastName', 'username', 'password', 'email']))
        .then(response => {
          const token = jwt.encode({ id: response.id }, jwtSecret);
          const user = _.omit(response, ["dataValues.password"]);
          res.json({ user, token });
        })
        .catch(err => res.status(412).json({ msg: err.message }));
    });

  app.route("/api/v1/login")
    .post((req, res) => {
      User
        .findOne({ username: req.body.username })
        .then(dbUser => {
          if (dbUser.authenticate(req.body.password)) {
            const user = _.omit(dbUser, ["dataValues.password"]);
            const token = jwt.encode({ id: user.id }, jwtSecret);
            return res.json({ 
              user,
              token 
            });
          }
          res.status(412).json({ errors: ['Password does not match']});
        })
        .catch(err => res.status(412).json({ errors: err }))
    });

  app.route("/api/v1/users/:id")
    .all(authenticate())
    .get((req, res) => {
      User
        .findById(req.params.id, {
          attributes: ["id", "firstName", "lastName", "username", "email"]
        })
        .then(user => res.json(user))
        .catch(err => res.status(412).json({ msg: err.message }));
    })
    .delete((req, res) => {
      User
        .destroy({
          where: {
            id: req.user.id
          }
        })
        .then(result => res.sendStatus(204))
        .catch(err => res.status(412).json({ msg: err.message }));
    });
};
