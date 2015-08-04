var app = require('./app');

app.models.sequelize.sync().then(function() {
    app.app.listen(80);
});
