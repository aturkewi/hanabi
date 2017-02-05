'use strict';

module.exports = (sequelize, DataTypes) => {

  const Game = sequelize.define('game', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    currentPlayerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    clueCounter: {
      type: DataTypes.INTEGER,
      defaultValue: 8,
    },
    missesRemaining: {
      type: DataTypes.INTEGER,
      defaultValue: 3,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    classMethods: {
      associate: function(models) {
        const { hand, gameCard, card, user } = models;
        Game.hasMany(hand);
        Game.belongsToMany(user, {
          through: hand
        });
        hand.hasMany(gameCard);
        hand.belongsToMany(card, {
          through: gameCard,
          foreignKey: "gameId"
        });
      }
    }
  });

  return Game;
};
