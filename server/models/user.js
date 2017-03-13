const bcrypt = require('bcrypt');
const Joi = require('joi');
const _ = require('lodash');
const { Bookshelf } = require('./db');

const User = Bookshelf.Model.extend({
  
  tableName: 'users',
  
  initialize() {
    this.on('creating', this.validateSave)
  },
  
  validateSave() {
    return new Promise((resolve, reject) => {
      const result = Joi.validate(this.attributes, Joi.object({
        first_name: Joi.string(),
        last_name: Joi.string(),
        email: Joi.string().email().required(),
        username: Joi.string().required(),
        password: Joi.string().min(8).required(),
        created_at: Joi.date().timestamp(),
        updated_at: Joi.date().timestamp(),
      }));
      
      if (result.error) {
        return reject(result.error);
      }
      
      return resolve(this.hashPassword);
    });
  },
  
  hashPassword() {
    return new Promise((resolve, reject) => {
      bcrypt.hash(this.attributes.password, 10, (err, hash) => {
      if (err) {
        reject(err);
      }

      this.set('password', hash);
      resolve(hash)
      });
    });
  },
  
  authenticate(password) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, this.attributes.password, (err, response) => {
        return response ? resolve(this) : reject('That password is not valid!');
      });
    });
  },

  prepUserForAuth() {
    return _.omit(this.attributes, ['password']);
  },
  
})

module.exports = Bookshelf.model('User', User);

// let user = new User({ username; '' }).save().then(user => user.authenticate()).catch(err => console.log(err))

