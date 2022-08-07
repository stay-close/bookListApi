const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bookListRouter = require('./routes/bookListRouter')
const env = require('dotenv')
env.config()
const port = process.env.PORT || 3030
app.use(express.json())

app.use('/api/v2/list', bookListRouter)

mongoose.connect('mongodb+srv://Stay-Close:S01750507959s@cluster0.6hrrj3l.mongodb.net/bookList?retryWrites=true&w=majority')

.then(res => {
        console.log('Database Started.')
    })
    .catch(err => {
        console.log('Database loading Error ', err)
    })






app.listen(port, () => {
    console.log("Listening port ", port)
})