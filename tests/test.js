var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare
  .goto('https://nonprofit-web-app.herokuapp.com/index')
  .click('#volunteer>a')
  .wait('.bannerImg')
  .evaluate(function () {
    return document.querySelector('.volPage')
  })
  .end()
  .then(function (result) {
    console.log(result)
  })
  .catch(function (error) {
    console.error('page didn\'t render', error);
  });
