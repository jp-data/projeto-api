var express = require('express');
var router = express.Router()
var moviesController = require('../controllers/moviesController');

router.get('/create', moviesController.create);

router.post('/register', moviesController.register);

module.exports = router;