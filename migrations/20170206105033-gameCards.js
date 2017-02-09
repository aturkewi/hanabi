'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('gameCards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      displayColor: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      displayNumber: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      location: {
        type: Sequelize.ENUM('inDeck', 'inHand', 'played', 'discarded'),
      },
      cardId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cards',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      gameId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'games',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      handId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'hands',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('gameCards');
  }
};
