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
  .goto('http://www.habitatwake.org/about-us')

  .click('#menu-item-39>a')
  .wait('.home')
  .evaluate(function () {
    return document.querySelector('.html-box')
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('page didn\'t render', error);
  });

