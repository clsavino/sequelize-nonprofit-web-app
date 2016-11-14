'use strict';

var models = require("../models");
var csvdata = require("csvdata");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return csvdata.load("./seeders/event.csv")
        .then(function(data) {
            console.log(data)
            return models.events.bulkCreate(data);
        })
    },

    down: function (queryInterface, Sequelize) {
        return models.events.destroy({where: {}});
    }
};
