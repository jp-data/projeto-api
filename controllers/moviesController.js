let db = require('../database/models');

let moviesController = {
    
    //view do formulário
    moviesRouter: function(req, res) {
        res.render('movies', { error: null })
    },

    // cadastro de filmes
    register: function(req, res) {

    },

    //função assíncrona que retorna todos os genêros da tabela genres
    create: function(req, res) {
        db.Genre.findAll()
            .then(function(genresReturned) {
                return res.render('createMovie', { genres: genresReturned})
            })
            .catch((error) => console.log(error))
    }
};

module.exports = moviesController;