import _ from 'lodash';
import pry from 'pryjs';
const User = require('../../../server/models/user');
const Game = require('../../../server/models/game');

module.exports = (app) => {
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
        .findOne({
          where: {
            id: req.params.gameId
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
        })
        .then(game => res.status(200).json(game))
        .catch(err => res.json(err));
    })
    .put((req, res) => {
      return sequelize.transaction((t) => {
        return Game
          .findOne({ where: { id: req.params.gameId } })
          .then((game) => {
            game.currentPlayerId = req.body.currentPlayerId;
            return game.save().then(response => response);
          })  
          .then(results => res.json(results))
      })
      .catch(err => console.log(err));
    });
};
