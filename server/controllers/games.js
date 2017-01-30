const { Game } = require('../models');

const create = (req, res, next) => {
  console.log(res.token);
  Game.create({
    currentPlayerId: res.token.id
  })
  .then(game => res.status(200).json(game))
  .catch(err => res.json(err));
}

module.exports = {
  create,
}
