let db = require('../database/models');

let apiController = {

    getMovies: function(req, res) {
        db.Movie
            .findAll()
            .then(returnedMovies => {
                return res.json(returnedMovies)
            })
    },
};

module.exports = apiController;