const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db.js")
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require("./middlewares/errorMiddlewares.js");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("API is running...")
})

app.use("/api/users", userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(5000, console.log(`Server started on PORT ${PORT}`))