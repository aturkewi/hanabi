'use strict';

module.exports = (sequelize, DataTypes) => {

  const Hand = sequelize.define('Hand', {
    GameId: {
      type: DataTypes.INTEGER,
      references: {
        model: "games",
        key: "id"
      },
    },
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id"
      },
    },
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        const { User, GameCard, Game, Card } = models;
        Hand.belongsTo(Game);
        Hand.belongsTo(User);
        Hand.hasMany(GameCard);
        Hand.belongsToMany(Card, { through: GameCard });
      }
    }
  });

  return Hand;
};
