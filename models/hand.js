module.exports = (sequelize, DataTypes) => {

  const Hand = sequelize.define('Hand', {
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
        model: 'User',
        key: 'id'
      }
    },
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Game',
        key: 'id'
      }
    },
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        const { User, GameCard, Game, Card } = models;
        Hand.belongsTo(Game);
        Hand.belongsTo(User);
        Hand.hasMany(GameCard);
        Hand.belongsToMany(Card, {
          through: GameCard
        });
      }
    }
  });

  return Hand;
};
