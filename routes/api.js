var express = require('express');
var router = express.Router();
const moviesController = require('../controllers/moviesController');

// lista de livros
router.get('/movies', moviesController.create);

module.exports = router;