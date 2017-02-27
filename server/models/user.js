const knex = require('./knex');
const bcrypt = require('bcrypt')


const Users = () => {
  return knex('users');
}

const create = (user_attributes) => {
  // validations would go here?
  const user = Object.assign({}, user_attributes, { 
    password: bcrypt.hashSync(user_attributes.password, 10) 
  });
  
  return Users().insert(user);
}

module.exports = {
  create,
}