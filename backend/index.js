const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const movie = require("./routes/movie")
const favorite = require("./routes/favorite")

const mongoose = require('mongoose')

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


app.use('/api/movie', movie)
app.use('/api/favorite', favorite)



const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}`)
})



