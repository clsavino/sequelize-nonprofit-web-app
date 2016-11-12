var models = require('./models')


// SOLUTION: Sync our models
models.sequelize.sync({force:true})