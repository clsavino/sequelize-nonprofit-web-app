var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare
  .goto('https://nonprofit-web-app.herokuapp.com/index')
  .click('a#volunteer')
  .wait('.bannerImg')
  .evaluate(function () {
    return document.querySelector('.volPage')
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);

  });
