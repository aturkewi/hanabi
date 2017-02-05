import _ from 'lodash';
import jwt from 'jwt-simple';

module.exports = (app) => {
  const User = app.db.models.User;
  const authenticate = app.auth.authenticate;
  const jwtSecret = app.libs.config.jwtSecret;

  app.route("/api/v1/users")
    /**
      @api {post} /api/v1/users Create an authenticated user
      @apiGroup Users
      @apiParam {String} firstName User first name
      @apiParam {String} lastName User last name
      @apiParam {String} username User username
      @apiParam {String} email User email
      @apiParam {String} password User password
      @apiParamExample {json} Input
        {
          "firstName": "Luke",
          "lastName": "Ghenco",
          "username": "lukeghenco"
          "email": "luke@gmail.com",
          "password": "123456"
          }
      @apiSuccess {Object} user User object
      @apiSuccess {Number} user.id User id
      @apiSuccess {String} user.firstName User first name
      @apiSuccess {String} user.lastName User last name
      @apiSuccess {String} user.username User username
      @apiSuccess {String} user.email User email
      @apiSuccess {String} token User JWT token
      @apiSuccessExample {json} Success
        HTTP/1.1 200 OK
        {
          "user": {
            "id": 1,
            "firstName": "Luke",
            "lastName": "Ghenco",
            "username": "lukeghenco"
            "email": "luke@gmail.com",
          },
          "token": "abc.123.def.456"
        }
      @apiErrorExample {json} Register error
        HTTP/1.1 412 Precondition Failed
    */
    .post((req, res) => {
      User
        .create(req.body)
        .then(response => {
          const token = jwt.encode({ id: response.id }, jwtSecret);
          const user = _.omit(response, ["dataValues.password"]);
          res.json({ user, token });
        })
        .catch(err => res.status(412).json({ msg: err.message }));
    });

  app.route("/api/v1/users/:id")
    .all(authenticate())
    /**
      @api { get } /
      @api {get} /api/v1/users/:id Get an authenticated user's data
      @apiGroup Users
      @apiHeader {String} Authorization Token of authenticated user
      @apiHeaderExample {json} Header
        {"Authorization": "JWT xyz.abc.123.hgf"}
        @apiSuccess {Number} id id
        @apiSuccess {String} firstName User first name
        @apiSuccess {String} lastName User last name
        @apiSuccess {String} username User username
        @apiSuccess {String} email User email
        @apiSuccess {Date} updated_at User date last updated
        @apiSuccess {Date} created_at User date created
        @apiSuccessExample {json} Success
          HTTP/1.1 200 OK
          {
            "id": 1,
            "firstName": "Luke",
            "lastName": "Ghenco",
            "username": "lukeghenco"
            "email": "luke@gmail.com",
            "updated_at": "2017-02-10T15:30:11.800z",
            "created_at": "2017-02-10T15:20:11.800z"
          }
      @apiErrorExample {json} Find error
        HTTP/1.1 412 Precondition Failed
    */
    .get((req, res) => {
      User
        .findById(req.params.id, {
          attributes: ["id", "firstName", "lastName", "username", "email"]
        })
        .then(user => res.json(user))
        .catch(err => res.status(412).json({ msg: err.message }));
    })
    /**
      @api {delete} /api/v1/users/:id Deletes an authenticated user
      @apiGroup Users
      @apiHeader {String} Authorization Token of authenticated user
      @apiHeaderExample {json} Header
      {"Authorization": "JWT xyz.abc.123.hgf"}
      @apiSuccessExample {json} Success
      HTTP/1.1 204 No Content
      @apiErrorExample {json} Delete error
      HTTP/1.1 412 Precondition Failed
    */
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
