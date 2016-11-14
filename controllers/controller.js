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

router.get('/schedule', function(req,res) {
  res.render("schedule");
});

// get all events from database and display on page
/*
router.get('/events', function (req, res) {
    models.events.findAll({}).then(function(data) {
    res.render("events", {events: data});
  });
});
*/

// get all families from database and display on page
/*
router.get('/mealsonwheels', function (req, res) {
    models.mealsonwheels.findAll({}).then(function(data) {
    res.render("schedule", {mealsonwheels: data});
  });
});
*/

// get all volunteers from database and display on page
/*
router.get('/volunteers', function (req, res) {
    models.volunteers.findAll({}).then(function(data) {
    res.render("volunteer", {Volunteers: data});
  });
});
*/

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
//????????????????????????????????????????????????????
// should it be /mealsonwheels or /schedule ?????????????????????????????????????????????????????//
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
    res.redirect("/schedule");
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
    res.redirect("/volunteer");
  });
});

module.exports = router;

