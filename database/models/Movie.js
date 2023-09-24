const { INTEGER } = require("sequelize");

module.exports =  function(sequelize, dataTypes) {
    

    let alias = "Movie"

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            prymaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: dataTypes.STRING
        },
        awards: {
            type: dataTypes.INTEGER
        },
        rating: {
            type: dataTypes.DOUBLE
        },
        length: {
            type: dataTypes.INTEGER
        },
        genre_id: {
            type: dataTypes.INTEGER
        },
        release_date: {
            type: dataTypes.Date
        }

    };

    let config = {
        tableName: "movies",
        timeStamps: false
    }

    let Movie  = sequelize.define(alias, cols, config);
    

    Movie.associate = function(models){
        Movie.belongsTo(models.Genre, {
            as: "genre",
            foreignKey1: "genre_id"
        });

        Movie.belongsToMany(models.Actor, {
            as: "actors",
            //tabela intermediaria
            through: "actor_movie",
            foreignKey1: "movie_id",
            otherKey: "actor_id",
            timeStamps: false
        })
    }

    return Movie;
}