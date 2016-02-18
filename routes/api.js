/**
 * Routing module for handling all routes under /api
 */

/**
 * Import core modules
 */

var express = require('express');
var router  = express.Router();

router.use('/users', require('./users'));

router.get('/', function(request, response) {
  response.json({"made it": "ok"});
});

module.exports = router;