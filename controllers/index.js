'use strict';
var express = require('express');
var router = express.Router();

router.use('/posts', require('./posts'));

module.exports = router;