'use strict';

module.exports = (sequelize, DataTypes) => {

  const Card = sequelize.define('Card', {
    color: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        const { Hand, GameCard, Game } = models;
        Card.hasMany(GameCard);
        Card.belongsToMany(Game, { through: GameCard });
        Card.belongsToMany(Hand, { through: GameCard });
      }
    }
  });

  return Card;
};
