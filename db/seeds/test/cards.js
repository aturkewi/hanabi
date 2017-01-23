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
const Card = require('../../../app/models/card');

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(() => {
      console.log('hi');
      return Promise.all(
        deck.map( card => Card.create(card) )
      );
    });
};
