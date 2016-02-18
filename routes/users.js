/**
 * Routing module for handling all routes under /api
 */

/**
 * Import core modules
 */

var models  = require('../models');
var express = require('express');
var router  = express.Router();

// /users
router.get('/', function(request, response) {
  models.User.findAll({
  }).then(function(users) {
    response.json(users);
  }).catch(function(error) {
    console.log(error);
    response.json(error);
  });
});

// /users/:id
router.get('/:id', function(request, response) {
  models.User.findAll({
    where: {
      id: request.params.id
    }
  }).then(function(users) {
    response.json(users);
  }).catch(function(error) {
    console.log(error);
    response.json(error);
  });
});

module.exports = router;