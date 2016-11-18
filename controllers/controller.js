// create all the functions that will do the routing for the app,
//and the logic of each route.
var express = require('express');
var router = express.Router();
var models = require('../models');
var connection = require('../config/connection.js');

//root route redirect to /index
router.get('/', function (req, res) {
  res.redirect('/index');
});

router.get('/index', function (req, res) {
    res.render("index");
  });

// get all events from database and display on page
router.get('/events', function (req, res) {
    models.events.findAll({}).then(function(data) {
    res.render("events", {events: data});
  });
});

router.get('/aboutUs', function (req, res) {
    res.render("aboutUs");
  });

router.get('/contactUs', function (req, res) {
    res.render("contactUs");
  });

router.get('/giftIdeas', function (req, res) {
    res.render("giftIdeas");
  });

router.get('/volunteer', function (req, res) {
    res.render("volunteer");
  });

router.get('/donate', function (req, res) {
    res.render("donate");
  });

// get all families from database and display on page
router.get('/adminMealsSchedule', auth, function (req, res) {
    models.mealsonwheels.findAll({}).then(function(data) {
    res.render("adminMealsSchedule", {mealsonwheels: data});
  });
});

// get all volunteers from database and display on page
router.get('/adminVolunteers', auth, function (req, res) {
    models.Volunteers.findAll({}).then(function(data) {
    res.render("adminVolunteers", {Volunteers: data});
  });
});

// insertEvent inserts new event in events table
router.post('/events/insertEvent', function (req, res) {
  var newEvent = req.body.EventName;
  var newDetails = req.body.Details;
  var newDate = req.body.Date;

  model.events.create({
    EventName: newEvent,
    Details: newDetails,
    Date: newDate
  })
  .then(function () {
    res.redirect("/events");
  });
});

// insertFamily inserts new family in mealsonwheels table
router.post('/mealsonwheels/insertFamily', function (req, res) {
  var newFamily = req.body.Family;
  var newDriver = req.body.Driver;
  var newRoute = req.body.Route;
  var newDay = req.body.Day;

  model.mealsonwheels.create({
    Family: newFamily,
    Driver: newDriver,
    Route: newRoute,
    Day: newDay,
  })
  .then(function () {
    res.redirect("/adminMealsSchedule");
  });
});

// insertVolunteer inserts new volunteer in Volunteers table
router.post('/Volunteers/insertVolunteer', function (req, res) {
  var newName= req.body.Name;
  var newEventName = req.body.EventName;
  var newPhone = req.body.Phone;

  model.Volunteers.create({
    Name: newName,
    EventName: newEventName,
    Phone: newPhone
  })
  .then(function () {
    res.redirect("/adminVolunteers");
  });
});

module.exports = router;
