module.exports = (sequelize, DataTypes) => {

  const Card = sequelize.define('Card', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    classMethods: {
      associate: function(models) {
        const { Hand, GameCard, Game } = models;
        Card.hasMany(GameCard);
        Card.belongsToMany(Game, {
          through: GameCard
        });
        Card.belongsToMany(Hand, {
          through: GameCard
        });
      }
    }
  });

  return Card;
};
