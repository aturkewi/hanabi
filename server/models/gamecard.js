'use strict';

module.exports = (sequelize, DataTypes) => {

  const GameCard = sequelize.define('gameCard', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    displayColor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    displayNumber: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    handId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "hands",
        key: "id"
      }
    },
    cardId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "cards",
        key: "id"
      }
    },
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "games",
        key: "id"
      }
    },
    location: {
      type: DataTypes.ENUM('inDeck', 'inHand', 'played', 'discarded'),
    }
  }, {
    classMethods: {
      associate: function(models) {
        const { card, game, hand } = models;
        GameCard.belongsTo(card);
        GameCard.belongsTo(game);
        GameCard.belongsTo(hand);
      }
    }
  });

  return GameCard;
};
