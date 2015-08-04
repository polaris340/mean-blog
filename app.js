var express = require('./config/express');
var models = require('./models')
var app = express();

models.sequelize.sync().then(function() {
    app.listen(3000);
    console.log('server running...');
});

module.exports = {
    models: models,
    app: app
};