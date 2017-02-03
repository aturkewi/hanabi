'use strict';

module.exports = (sequelize, DataTypes) => {

  const GameCard = sequelize.define('GameCard', {
    displayColor: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        const { Card, Game, Hand } = models;
        GameCard.belongsTo(Card);
        GameCard.belongsTo(Game);
        GameCard.belongsTo(Hand);
      }
    }
  });

  return GameCard;
};
