'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hands', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      playerId: {
        type: Sequelize.INTEGER,
        references: {
          allowNull: false,
          model: 'users',
          key: 'id'
        }
      },
      gameId: {
        type: Sequelize.INTEGER,
        references: {
          allowNull: false,
          model: 'games',
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Hands');
  }
};
