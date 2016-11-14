'use strict';

var models = require("../models");
var csvdata = require("csvdata");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return csvdata.load("./seeders/mow.csv")
        .then(function(data) {
            console.log(data)
            return models.mealsonwheels.bulkCreate(data);
        })
    },

    down: function (queryInterface, Sequelize) {
        return models.mealsonwheels.destroy({where: {}});
    }
};