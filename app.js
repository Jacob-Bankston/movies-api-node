const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const PORT = 3000
const Movie = require('./models/movies')

app.use(express.urlencoded())
app.use(express.static('styles'))

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

global.movies = []

// Main Page
app.get('/', (req,res) => {
    res.render('index', {movies: movies})
})

app.post('/add-movie',(req,res) => {
    let title = req.body.title
    let description = req.body.description
    let genre = req.body.genre
    let posterURL = req.body.posterURL
    let movie = new Movie(title, description, genre, posterURL)

    movies.push(movie)

    console.log(movie)
    console.log(movie.title)
    console.log(movie.description)
    console.log(movie.genre)
    console.log(movie.posterURL)
    res.redirect('/')

})

app.post('/delete-movie', (req,res) => {
    let movieName = req.body.movieName
    movies = movies.filter(movie => {
        movie.name != movieName
    })

    res.redirect('/')

})

app.listen(PORT, () => {
    console.log("Server is running...")
})