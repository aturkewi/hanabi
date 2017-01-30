const { Game, Hand, User } = require('../models');
const pry = require('pryjs');

const create = (req, res, next) => {
  Game.create({
    currentPlayerId: res.token.id,
    Hands: [
      {
        UserId: res.token.id
      }
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
}

module.exports = {
  create,
}
