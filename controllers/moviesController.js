let db = require('../database/models');

let moviesController = {
    
    //view do formulário
    moviesRouter: function(req, res) {
        res.render('movies', { error: null })
    },

    // cadastro de filmes
    register: function(req, res) {
        db.Movie.create({
            title: req.body.title,
            awards: req.body.awards,
            release_date: req.body.release-date,
            genre_id: req.body.genre_id,
            length: req.body.duration,
            rating: req.body.rating
        })
        .then(() => res.redirect('/'))
        .catch((error) => console.log(error))
    },

    //função assíncrona que retorna todos os genêros da tabela genres
    create: function(req, res) {
        db.Genre.findAll()
            .then(function(genresReturned) {
                return res.render('movies', { genres: genresReturned})
            })
            .catch((error) => console.log(error))
    }
};

module.exports = moviesController;