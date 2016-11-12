'use strict';
module.exports = function(sequelize, DataTypes) {
  var Volunteer = sequelize.define('Volunteer', {
    Name: DataTypes.STRING,
    Event: DataTypes.STRING,
    Phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Volunteer;
};