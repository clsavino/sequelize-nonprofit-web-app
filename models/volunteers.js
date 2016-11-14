'use strict';
module.exports = function(sequelize, DataTypes) {
  var Volunteers = sequelize.define('Volunteers', {
    Name: DataTypes.STRING,
    EventName: DataTypes.STRING,
    Phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Volunteers;
};
