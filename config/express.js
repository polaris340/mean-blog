'use strict';
var express = require('express');
var bodyParser = require('body-parser');

module.exports = function() {
    var app = express();
    app.use(express.static('public'));
    app.use(bodyParser.json());
    app.use(require('../controllers'));

    return app;
};