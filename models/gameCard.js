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
