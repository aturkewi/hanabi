'use strict';

module.exports = (sequelize, DataTypes) => {

  const Game = sequelize.define('Game', {
    currentPlayerId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        const { Hand, GameCard, Card, User } = models;
        Game.hasMany(Hand);
        Game.belongsToMany(User, { through: Hand });
        Hand.hasMany(GameCard);
        Hand.belongsToMany(Card, { through: GameCard });
      }
    }
  });

  return Game;
};
