const { INTEGER } = require("sequelize");

module.exports =  function(sequelize, dataTypes) {
    

    let alias = "Actor"

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            prymaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },

    };

    let config = {
        tableName: "actors",
        timeStamps: false
    }

    let Actor  = sequelize.define(alias, cols, config);

    Actor.associate = function(models){
        Actor.belongsToMany(models.Movie, {
            as: "Movies",
            //tabela intermediaria
            through: "actor_movie",
            foreignKey: "actor_id",
            otherKey: "movie_id",
            timeStamps: false
        })
    }
    
    return Actor;
}