'use strict';
module.exports = (sequelize, DataTypes) => {

  const Card = sequelize.define('Card', {
    color: DataTypes.STRING
  }, {} );

  return Card;
};
