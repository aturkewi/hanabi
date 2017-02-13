import _ from 'lodash';

module.exports = (app) => {
  const { User, Game, Hand } = app.db.models;
  const currentUser = app.services.auth.jwtAuth.currentUser;

  app.route("/api/v1/games")
    .all(currentUser)
    .get((req, res)=> {
      Game.all()
        .then(games => res.status(200).json(games))
        .catch(err => res.json({message: err}))
    })
    .post((req, res) => {
      Game
        .create({
          title: req.body.title,
          currentPlayerId: res.token.id,
          hands: [
            { userId: res.token.id }
          ]
        }, {
          include: [ Hand ]
        })
        .then(game => Game.findOne({
          where: {
            id: game.id
          },
          include: [
            {
              model: Hand,
              include: [
                {
                  model: User,
                  attributes: ["username", "email", "firstName", "lastName"]
                }
              ]
            }
          ]
        }))
        .then(game => res.status(200).json(game))
        .catch(err => res.json(err));
    })

  app.route('/api/v1/games/:gameId')
    .all(currentUser)
    .get((req, res) => {
      Game
        .findById(req.params.id)
    })
};
