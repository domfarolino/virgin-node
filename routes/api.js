/**
 * Routing module for handling all routes under /api
 */

/**
 * Import core modules
 */
var router = require('express').Router();

/**
 * Import database connector business logic layer module
 */
var dbLogic = require('../models/logic/dbLogic.js');

router.get('/users', function(request, response, next) {

  dbLogic.getUsers().then(function(result) {
    console.log("Route Then");
    response.json(result);
  }).catch(function(error) {
    console.log("Route Catch");
    console.log({"error": error});
    response.json({"error": error});
  });
});

module.exports = router