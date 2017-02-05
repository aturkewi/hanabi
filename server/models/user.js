'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('user', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: true
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: true
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        unique: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        unique: true,
        notEmpty: true,
      }
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
  }, {

    classMethods: {

      associate: function(models) {
        const { Hand, Game } = models;
        User.hasMany(Hand)
        User.belongsToMany(Game, {
          through: Hand
        });
      }

    },

    instanceMethods: {

      authenticate: function(password) {
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
