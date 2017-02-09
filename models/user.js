const bcrypt = require('bcrypt');

/*
  @ NOTE: if you want async hashing

  const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) return reject(err);
        resolve(hash);
      });
    });
  }
*/

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
      unique: {
        args: true,
        msg: "Username is already in use!"
      },
      allowNull: false,
      validate: {
        notEmpty: true,
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
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
        unique: function(email, next) {
          User.find({ where: {
            email: email
          }})
          .then((user) => {
            if (user && this.id !== user.id) {
              return next('Email is already in use!');
            }
            return next()
          })
          .catch(err => next(err));
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
  }, {

    hooks: {
      beforeCreate: user => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
        /* 
          @ NOTE: if you want hashPassword to be async

          return hashPassword(user.password)
          .then(function(hash) {
            user.password = hash;
          });
        */
      },
    },

    classMethods: {

      associate: function(models) {
        const { Hand, Game } = models;
        User.hasMany(Hand)
        User.belongsToMany(Game, { through: Hand });
      },
      
    },

    instanceMethods: {

      fullName: function() {
        return `${this.firstName} ${this.lastName}`
      },

      authenticate: function(password) {
        return bcrypt.compareSync(password, this.password);
        /* 
          @NOTE: if you need async hashing
          return new Promise((resolve, reject) => {
          console.log('from db: ',this.password);
          console.log('from form: ', password);
          hashPassword(password).then(hash => console.log("hash %s", hash))
          bcrypt.compare(password, this.password)
            .then((response) => {
              if (response === true) {
                resolve(true);
              } else {
                reject('Password is not valid!')
              }
            });
          });
        */
      }

    },

  });

  return User;
};
