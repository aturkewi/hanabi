const bcrypt = require('bcrypt');
const joi = require('joi');
const { Bookshelf } = require('./db');
require('./user');

const Game = Bookshelf.Model.extend({
  
  tableName: 'games',
  
})

module.exports = Bookshelf.model('Game', Game);

// let user = new User({ username; '' }).save().then(user => user.authenticate()).catch(err => console.log(err))

