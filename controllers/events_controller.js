// create all the functions that will do the routing for the app,
//and the logic of each route.
var express = require('express');
var router = express.Router();
var models = require('../models');
var connection = require('../config/connection.js');

//model.burger.sync({force:true});
models.sync();

//root route redirect to /index
router.get('/', function (req, res) {
  res.redirect('/index');
});


router.get('/index', function (req, res) {
    res.render("index");
  });

router.get('/donate', function (req, res) {
    res.render("donate");
  });

router.get('/giftIdeas', function (req, res) {
    res.render("index");
  });

router.get('/ministries', function (req, res) {
    res.render("donate");
  });

// Insert route inserts new burger in database - '/burgers/new'
router.post('/events/insertOne', function (req, res) {
  var newEvent = req.body.burger_name;
  model.burger.create({
    burger_name: newBurger,
    devoured: false
  })
  .then(function () {
    res.redirect("/burgers");
  });
});



module.exports = router;

