module.exports = (sequelize, DataTypes) => {

  const Card = sequelize.define('card', {
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
        const { hand, gameCard, game } = models;
        Card.hasMany(gameCard);
        Card.belongsToMany(game, {
          through: gameCard
        });
        Card.belongsToMany(hand, {
          through: gameCard
        });
      }
    }
  });

  return Card;
};
