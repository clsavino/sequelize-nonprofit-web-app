'use strict';
module.exports = function(sequelize, DataTypes) {
  var events = sequelize.define('events', {
    EventName: DataTypes.STRING,
    Details: DataTypes.STRING,
    Date: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return events;
};