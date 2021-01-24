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

const favMovie = mongoose.model('favMovie', favMovieSchema)
module.exports = favMovie