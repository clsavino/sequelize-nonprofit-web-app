var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare
  .goto('https://nonprofit-web-app.herokuapp.com/index')

  .click('')
  .wait('')
  .evaluate(function () {
    return document.querySelector('')
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });

//the example that worked
var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare
  .goto('https://nonprofit-web-app.herokuapp.com/index')
  .click('#login>a')
  .wait('')
  .evaluate(function () {
    return document.querySelector('')
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('page didn\'t render', error);
  });

