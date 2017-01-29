'use strict';

const deck = [
  {color: "Red", number: 1},
  {color: "Red", number: 1},
  {color: "Red", number: 1},
  {color: "Red", number: 2},
  {color: "Red", number: 2},
  {color: "Red", number: 3},
  {color: "Red", number: 3},
  {color: "Red", number: 4},
  {color: "Red", number: 4},
  {color: "Red", number: 5},
  {color: "Yellow", number: 1},
  {color: "Yellow", number: 1},
  {color: "Yellow", number: 1},
  {color: "Yellow", number: 2},
  {color: "Yellow", number: 2},
  {color: "Yellow", number: 3},
  {color: "Yellow", number: 3},
  {color: "Yellow", number: 4},
  {color: "Yellow", number: 4},
  {color: "Yellow", number: 5},
  {color: "Green", number: 1},
  {color: "Green", number: 1},
  {color: "Green", number: 1},
  {color: "Green", number: 2},
  {color: "Green", number: 2},
  {color: "Green", number: 3},
  {color: "Green", number: 3},
  {color: "Green", number: 4},
  {color: "Green", number: 4},
  {color: "Green", number: 5},
  {color: "Blue", number: 1},
  {color: "Blue", number: 1},
  {color: "Blue", number: 1},
  {color: "Blue", number: 2},
  {color: "Blue", number: 2},
  {color: "Blue", number: 3},
  {color: "Blue", number: 3},
  {color: "Blue", number: 4},
  {color: "Blue", number: 4},
  {color: "Blue", number: 5},
  {color: "White", number: 1},
  {color: "White", number: 1},
  {color: "White", number: 1},
  {color: "White", number: 2},
  {color: "White", number: 2},
  {color: "White", number: 3},
  {color: "White", number: 3},
  {color: "White", number: 4},
  {color: "White", number: 4},
  {color: "White", number: 5}
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert['Card', deck.map(card => card)], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete['Card', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
