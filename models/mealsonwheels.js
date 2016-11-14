'use strict';
module.exports = function(sequelize, DataTypes) {
  var mealsonwheels = sequelize.define('mealsonwheels', {
    Family: DataTypes.STRING,
    Driver: DataTypes.STRING,
    Route: DataTypes.STRING,
    Day: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return mealsonwheels;
};