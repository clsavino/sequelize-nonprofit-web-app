var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare
  .goto('https://nonprofit-web-app.herokuapp.com/index')

  .click('')
  .wait('')
  .evaluate(function () {
    return document.querySelector('#main .searchCenterMiddle li a').href
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
