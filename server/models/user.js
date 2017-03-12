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

const findOne = (user_attributes) => {
  return Users().where(user_attributes).limit(1);
}

const findBy = (user_attributes) => {
  return Users().where(user_attributes);
}

// const authenticate = (username, password) =>{
//   const user = User.findBy({username});
//   if (user){
//     return brypt.compare(password, user.password, (err, res) => {
//       if (res){
//         return user
//       }else{
//         return "Incorrect password"
//       }
//     })
//   }else{
//     return "User not found"
//   }
// }

User.prototype.authenticate = (password) => {
  const user = this;
  return brypt.compare(password, user.password, (err, res) => {
    if (res){
      return user
    }else{
      return "Incorrect password"
    }
  })
}

module.exports = {
  create,
  findBy,
}