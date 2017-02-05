const bcrypt = require('bcrypt');

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) return reject(err);
      resolve(hash);
    });
  });
}

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
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
  }, {

    hooks: {
      beforeCreate: user => {
        return hashPassword(user.password)
        .then(function(hash) {
          user.password = hash;
        });
      },
    },

    classMethods: {

      associate: function(models) {
        const { hand, game } = models;
        User.hasMany(hand)
        User.belongsToMany(game, {
          through: hand
        });
      },

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
      },
    },

  });

  return User;
};
