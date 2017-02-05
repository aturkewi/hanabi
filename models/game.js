module.exports = (sequelize, DataTypes) => {

  const Game = sequelize.define('game', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    currentPlayerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
        Game.belongsToMany(User, { through: Hand });
        Game.hasMany(GameCard);
        Game.belongsToMany(Card, { through: GameCard });
      }
    }
  });

  return Game;
};
