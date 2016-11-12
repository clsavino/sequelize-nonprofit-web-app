'use strict';
module.exports = function(sequelize, DataTypes) {
  var Mealsonwheel = sequelize.define('Mealsonwheel', {
    Family: DataTypes.STRING,
    Driver: DataTypes.STRING,
    route: DataTypes.STRING,
    day: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Mealsonwheel;
};