module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Hands', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      gameId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Games',
          key: 'id'
        }
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Hands');
  }
};
