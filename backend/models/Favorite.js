const mongoose = require('mongoose')

const favMovieSchema = new mongoose.Schema({
    movieId: {
        type: String,
        require: true
    },
    movieTitle: {
        type: String,
        require: true
    },
    movieImage: {
        type: String,
        require: true
    },
    moviePoster: {
        type: String,
        require: true
    },
    MovieRunTime: {
        type: Number,
        require: true
    }
})

const favmovies = mongoose.model('favmovies', favMovieSchema)
module.exports = favmovies