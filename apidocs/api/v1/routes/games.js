/**
  @api {get} /api/v1/games Retrieve a list of all games 
  @apiGroup Games
  @apiHeader {String} Authorization Token of authenticated user
  @apiHeaderExample {json} Header
    {
      "Authorization": "JWT xyz.abc.123.hgf"
    }
  @apiSuccess {Object[]} games Games array
    @apiSuccess {Object} games.game Game
      @apiSuccess {Number} games.game.id Game id
      @apiSuccess {String} games.game.title Game title
      @apiSuccess {Number} games.game.currentPlayerId Game current player reference id
      @apiSuccess {Number} games.game.clueCounter Game clue count
      @apiSuccess {Number} games.game.missesRemaining Game misses remaining
      @apiSuccess {Date} games.game.createdAt Game date created
      @apiSuccess {Date} games.game.updatedAt Game date last updated
  @apiSuccessExample {json} Success
    HTTP/1.1 200 OK
    [
      {
        "id": 1,
        "title": "First game",
        "currentPlayerId": null,
        "clueCounter": 8,
        "missesRemaining": 3,
        "createdAt": "2017-02-12T21:46:50.855Z",
        "updatedAt": "2017-02-12T21:46:50.855Z"
      },
      {
        "id": 2,
        "title": "Second game",
        "currentPlayerId": null,
        "clueCounter": 8,
        "missesRemaining": 3,
        "createdAt": "2017-02-12T21:46:55.876Z",
        "updatedAt": "2017-02-12T21:46:55.876Z"
      },
      {
        "id": 3,
        "title": "Third Game",
        "currentPlayerId": null,
        "clueCounter": 8,
        "missesRemaining": 3,
        "createdAt": "2017-02-12T21:47:06.988Z",
        "updatedAt": "2017-02-12T21:47:06.988Z"
      }
    ]
  @apiErrorExample {json} Register error
    HTTP/1.1 412 Precondition Failed
*/

/**
  @api {post} /api/v1/games Create a Game
  @apiGroup Games
  @apiHeader {String} Authorization Token of authenticated user
  @apiHeaderExample {json} Header
    {
      "Authorization": "JWT xyz.abc.123.hgf"
    }
  @apiParam {String} title Game title
  @apiParamExample {json} Parameters
    {
      "title": "Flatiron instructors game"
    }
  @apiSuccess {Number} id Game id
  @apiSuccess {String} title Game title
  @apiSuccess {Number} currentPlayerId Game current player reference id
  @apiSuccess {Number} clueCounter Game clue count
  @apiSuccess {Number} missesRemaining Game misses remaining
  @apiSuccess {Date} createdAt Game date created
  @apiSuccess {Date} updatedAt Game date last updated
  @apiSuccess {Object[]} hands Hands array
    @apiSuccess {Object} hands.hand Hand
      @apiSuccess {Number} hands.hand.id Hand id
      @apiSuccess {Number} hands.hand.gameId Hand game reference id
      @apiSuccces {Number} hands.hand.userId Hand user reference id
      @apiSuccess {Object} hands.hand.user User
        @apiSuccess {String} hands.hand.user.username User username
        @apiSuccess {String} hands.hand.user.email User email
        @apiSuccess {String} hands.hand.user.firstName User first name
        @apiSuccess {String} hands.hand.user.lastName User last name
  @apiSuccessExample {json} Success
    HTTP/1.1 200 OK
    {
      "id": 1,
      "title": "Flatiron instructors game",
      "currentPlayerId": 1,
      "clueCounter": 8,
      "missesRemaining": 3,
      "createdAt": "2017-02-05T15:21:14.239Z",
      "updatedAt": "2017-02-05T15:21:14.239Z",
      "hands": [
        {
          "id": 1,
          "gameId": 1,
          "userId": 1,
          "user": {
            "username": "lukeghenco",
            "email": "luke@gmail.com",
            "firstName": "Luke",
            "lastName": "Ghenco"
          }
        },
        ...,
      ]
    }
  @apiErrorExample {json} Register error
    HTTP/1.1 412 Precondition Failed
*/


/**
  @api {get} /api/v1/games/:gameId Retrieve Game Details
  @apiGroup Games
  @apiHeader {String} Authorization Token of authenticated user
  @apiHeaderExample {json} Header
    {
      "Authorization": "JWT xyz.abc.123.hgf"
    }
  @apiSuccess {Number} id Game id
  @apiSuccess {String} title Game title
  @apiSuccess {Number} currentPlayerId Game current player reference id
  @apiSuccess {Number} clueCounter Game clue count
  @apiSuccess {Number} missesRemaining Game misses remaining
  @apiSuccess {Date} createdAt Game date created
  @apiSuccess {Date} updatedAt Game date last updated
  @apiSuccess {Object[]} hands Hands array
    @apiSuccess {Object} hands.hand Hand
      @apiSuccess {Number} hands.hand.id Hand id
      @apiSuccess {Number} hands.hand.gameId Hand game reference id
      @apiSuccces {Number} hands.hand.userId Hand user reference id
      @apiSuccess {Object} hands.hand.user User
        @apiSuccess {String} hands.hand.user.username User username
        @apiSuccess {String} hands.hand.user.email User email
        @apiSuccess {String} hands.hand.user.firstName User first name
        @apiSuccess {String} hands.hand.user.lastName User last name
  @apiSuccessExample {json} Success
    HTTP/1.1 200 OK
    {
      "id": 1,
      "title": "Flatiron instructors game",
      "currentPlayerId": 1,
      "clueCounter": 8,
      "missesRemaining": 3,
      "createdAt": "2017-02-05T15:21:14.239Z",
      "updatedAt": "2017-02-05T15:21:14.239Z",
      "hands": [
        {
          "id": 1,
          "gameId": 1,
          "userId": 1,
          "user": {
            "username": "lukeghenco",
            "email": "luke@gmail.com",
            "firstName": "Luke",
            "lastName": "Ghenco"
          }
        },
        ...,
      ]
    }
  @apiErrorExample {json} Register error
    HTTP/1.1 412 Precondition Failed
*/
