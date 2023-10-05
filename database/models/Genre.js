const { INTEGER } = require("sequelize");

module.exports =  function(sequelize, dataTypes) {
    

    let alias = "Genre"

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            prymaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING
        }
    };

    let config = {
        tableName: "genres",
        timeStamps: false
    }

    let Genre  = sequelize.define(alias, cols, config);

    Genre.associate = function(models){
        Genre.hasMany(models.Movie, {
            as: "Movies",
            foreignKey: "genre_id"
        })
    }
    
    return Genre;
}