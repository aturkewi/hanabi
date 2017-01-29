'use strict';

module.exports = (sequelize, DataTypes) => {

  const Hand = sequelize.define('Hand', {
    playerId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        const { User, GameCard, Game, Card } = models;
        Hand.belongsTo(User, { as: "Player", constraints: false });
        Hand.belongsTo(Game);
        Hand.hasMany(GameCard);
        Hand.belongsToMany(Card, { through: GameCard });
      }
    }
  });

  return Hand;
};
