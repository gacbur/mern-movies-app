const express = require("express")
let router = express.Router()

const favMovie = require('../models/Favorite')

router.post('/addFavMovie', async (req, res) => {

    try {
        const {
            movieId,
            movieTitle,
            movieImage,
            MovieRunTime
        } = req.body

        const movieItem = new favMovie(
            {
                movieId,
                movieTitle,
                movieImage,
                MovieRunTime,
            }
        )
        await movieItem.save()
        res.send(movieItem)

    } catch (err) {
        console.log(err)
    }
})

router.delete('/delete/:id', async (req, res) => {

    const id = req.params.id

    await favMovie.deleteOne({ "movieId": `${id}` })
    res.send(id)
})


module.exports = router