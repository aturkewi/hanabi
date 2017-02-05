module.exports = (sequelize, DataTypes) => {

  const GameCard = sequelize.define('GameCard', {
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
        model: "Hand",
        key: "id"
      }
    },
    cardId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Card",
        key: "id"
      }
    },
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Game",
        key: "id"
      }
    },
    location: {
      type: DataTypes.ENUM('inDeck', 'inHand', 'played', 'discarded'),
    }
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
