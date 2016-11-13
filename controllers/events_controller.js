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
    res.render("giftIdeas");
  });

router.get('/ministries', function (req, res) {
    res.render("ministries");
  });

router.get('/volunteer', function (req, res) {
    res.render("volunteer");
  });

router.get('/contactUs', function (req, res) {
    res.render("contactUs");
  });

router.get('/events', function(req,res) {
  res.render("events");
});

// get all events from database and display on page
/*
router.get('/events', function (req, res) {
    model.event.findAll({}).then(function(data) {
    res.render("events", {events: data});
  });
});
*/

// Insert route inserts new event in database
router.post('/events/insertOne', function (req, res) {
  var newEvent = req.body.Type;
  var newContent = req.body.Content;
  var newDate = req.body.EventDate;

  model.event.create({
    Type: newEvent,
    Content: newContent,
    EventDate: newDate
  })
  .then(function () {
    res.redirect("/events");
  });
});



module.exports = router;

