var models = require('./models')

// Sync the models - force:true needed for setting up tables first time in MySQL workbench
// and to cause tables to be made in  JAWSDB
// ater  deployment to heroku
models.sequelize.sync({force:true})
