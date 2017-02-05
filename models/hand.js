module.exports = (sequelize, DataTypes) => {


  const Hand = sequelize.define('hand', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        const { User, GameCard, Game, Card } = models;

        Hand.belongsTo(Game);
        Hand.belongsTo(User);
        Hand.hasMany(GameCard);
        Hand.belongsToMany(Card, { through: GameCard });
      }
    }
  });

  return Hand;
};
