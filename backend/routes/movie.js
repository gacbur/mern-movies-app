const express = require("express")
let router = express.Router()

const favMovie = require('../models/Favorite')

router.post('/addFavMovie', async (req, res) => {

    try {
        const {
            movieId,
            movieTitle,
            movieImage,
            moviePoster,
            MovieRunTime
        } = req.body

        const movieItem = new favMovie(
            {
                movieId,
                movieTitle,
                movieImage,
                moviePoster,
                MovieRunTime,
            }
        )
        await movieItem.save()
        res.send(movieItem)

    } catch (err) {
        console.log(err)
    }
})

router.get('/getFavMovies', async (req, res) => {

    favMovie.find({}, (err, result) => {
        if (err) {
            res.send(err)
        } else if (result) {
            res.send(result)
        }
    })
})

module.exports = router