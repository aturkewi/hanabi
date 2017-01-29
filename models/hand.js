'use strict';
module.exports = function(sequelize, DataTypes) {
  var Hand = sequelize.define('Hand', {
    playerId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Hand;
};