const env = process.env.NODE_ENV || 'development';
const config = require('../../knexfile')[env];
const knex = require('knex')(config);
const Bookshelf = require('bookshelf')(knex);
Bookshelf.plugin('registry');

module.exports = {
  Bookshelf, 
  knex
}