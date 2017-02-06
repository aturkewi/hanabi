import _ from 'lodash';

module.exports = (app) => {
  const { User, Game, Hand } = app.db.models;
  const authenticate = app.services.auth.passport.authenticate;
  const currentUser = app.services.auth.jwtAuth.currentUser;

  app.route("/api/v1/games")
    .all(authenticate(), currentUser)
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
};
