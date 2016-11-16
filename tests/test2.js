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
