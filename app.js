const express = require('express')
const app = express()
const path = require('path')
const multer = require('multer');
const mustacheExpress = require('mustache-express')
const PORT = 3000

const VIEWS_PATH = path.join(__dirname, '/views')

app.use(express.urlencoded())
app.use(express.static('styles'))

app.engine('mustache',mustacheExpress(VIEWS_PATH + '/partials','.mustache'))
app.set('views', VIEWS_PATH)
app.set('view engine', 'mustache')

const moviesRouter = require('./routes/movies')
app.use('/movies', moviesRouter)

global.movies = []

app.get('/api/movies', (req,res) => {
    res.json(movies)
})

app.listen(PORT, () => {
    console.log("Server is running...")
})