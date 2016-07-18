var express = require('express');
var router = express.Router();

var animals = require('../models/animals')

/* GET home page. */
router.get('/', function(req, res, next) {
  animals.all()
    .then(function(animals) {
      res.json(animals);
    })
});

module.exports = router;