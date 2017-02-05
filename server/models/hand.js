'use strict';

module.exports = (sequelize, DataTypes) => {

  const Hand = sequelize.define('hand', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'games',
        key: 'id'
      }
    },
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        const { user, gameCard, game, card } = models;
        Hand.belongsTo(game);
        Hand.belongsTo(user);
        Hand.hasMany(gameCard);
        Hand.belongsToMany(card, {
          through: gameCard
        });
      }
    }
  });

  return Hand;
};
