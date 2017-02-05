module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          notEmpty: true
        }
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          notEmpty: true
        }
      },
      username: {
        type: Sequelize.STRING,
        unique: {
          args: true,
          msg: "Username is already in use!"
        },
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: Sequelize.STRING,
        unique: {
          args: true,
          msg: "Email is already in use!"
        },
        allowNull: false,
        validate: {
          notEmpty: true,
          isEmail: true
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
