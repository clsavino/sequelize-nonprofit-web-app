'use strict';

var models = require("../models");
var csvdata = require("csvdata");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return csvdata.load("./seeders/vol.csv")
        .then(function(data) {
            console.log(data)
            return models.Volunteers.bulkCreate(data);
        })
    },

    down: function (queryInterface, Sequelize) {
        return models.Volunteers.destroy({where: {}});
    }
};
