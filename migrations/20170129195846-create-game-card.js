'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('game_cards', {
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
      handId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "hands",
          key: "id"
        }
      },
      cardId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "cards",
          key: "id"
        }
      },
      gameId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "games",
          key: "id"
        }
      },
      location: {
        type: Sequelize.ENUM('inDeck', 'inHand', 'played', 'discarded'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GameCards');
  }
};
