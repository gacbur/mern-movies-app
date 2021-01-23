const express = require('express')
const router = express.Router()

const favMovie = require('../models/Favorite')

router.delete('/delete/:id', async (req, res) => {

    const id = req.params.id

    await favMovie.deleteOne({ "movieId": `${id}` })
    res.send(id)
})

module.exports = router