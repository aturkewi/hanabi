/**
  @api {post} /api/v1/users Create an authenticated user
  @apiGroup Users
  @apiParam {String} firstName User first name
  @apiParam {String} lastName User last name
  @apiParam {String} username User username
  @apiParam {String} email User email
  @apiParam {String} password User password
  @apiParamExample {json} Parameters
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

/**
  @api {post} /api/v1/login Login an existing user
  @apiGroup Users
  @apiParam {String} username User username
  @apiParam {String} password User password
  @apiParamExample {json} Parameters
    {
      "username": "lukeghenco",
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
  @apiErrorExample {json} Login error
    HTTP/1.1 412 User not found or password did not match
*/

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
