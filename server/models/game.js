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
        const { Hand, GameCard, Card, User } = models;
        Game.hasMany(Hand);
        Game.belongsToMany(User, {
          through: Hand
        });
        Hand.hasMany(GameCard);
        Hand.belongsToMany(Card, {
          through: GameCard,
          foreignKey: "gameId"
        });
      }
    }
  });

  return Game;
};
