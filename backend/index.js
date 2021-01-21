const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const mongoose = require('mongoose')
const favMovie = require('./models/Favorite')

app.use(cors())
app.use(express.json())

mongoose.connect(`${process.env.DB_PATH}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Connected to database')
    }).catch((err) => {
        console.log('cannot connect to database' + err)
    })


app.post('/addFavMovie', async (req, res) => {

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


const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}`)
})



