'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    provider: DataTypes.STRING,
    providerId: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      validate: {
        unique: function(username, next) {
          User.find({ where: {
            username: username
          }})
          .then((user) => {
            if (user && this.id !== user.id) {
              return next('Username already in use!');
            }
            return next()
          })
          .catch(err => next(err));
        }
      },
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        unique: function(email, next) {
          User.find({ where: {
            email: email
          }})
          .then((user) => {
            if (user && this.id !== user.id) {
              return next('Email already in use!');
            }
            return next()
          })
          .catch(err => next(err));
        }
      }
    },
    password: DataTypes.STRING,
  }, {

    classMethods: {
      associate: function(models) {
        const { Hand, Game } = models;
        User.hasMany(Hand)
        User.belongsToMany(Game, { through: Hand });
        // associations can be defined here
      }
    },

    instanceMethods: {
      comparePassword: function(password) {
        return new Promise((resolve, reject) => {
          bcrypt.compare(password, this.password)
            .then((response) => {
              if (response === true) {
                resolve(true);
              } else {
                reject(new Error('Password is not valid!'))
              }
            });
        });
      },

      fullName: function() {
        return `${this.firstName} ${this.lastName}`
      }
    },

  });

  User.beforeCreate(function(user, options) {
    return hashPassword(user.password).then(function(hash) {
      user.password = hash;
    });
  });

  const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) return reject(err);
        resolve(hash);
      });
    });
  }

  return User;
};
