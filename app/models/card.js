const knex = require('../../db/knex');

const Card = () => {
  return knex('cards');
}

const create = (card) => {
  return Card().insert(card);
}

module.exports = {
  create,
}
