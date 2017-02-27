const User = require('../../server/models/user')

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() => {
      return Promise.all([
        User.create({
          username:'luke', 
          first_name:'Luke', 
          last_name:'Ghenco', 
          password:'password', 
          email:'the_luke@luke.com'
        }),
        User.create({
          username: "da_avi",
          first_name: "Avidor",
          last_name: "Turkewitz",
          password: 'password',
          email: "da_avi@da_bomb.com"
        })
      ]);
    });
};
