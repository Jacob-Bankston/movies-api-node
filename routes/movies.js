const express = require('express')
const router = express.Router()

const Movie = require('../models/movies')
const movieUuid = require('uuid/v1');


router.get('/', (req,res) => {
    res.render('index', {movies: movies})
})

router.post('/',(req,res) => {
    let title = req.body.title
    let description = req.body.description
    let genre = req.body.genre
    let poster = req.body.poster
    let movieId = movieUuid()
    let movie = new Movie(title, description, genre, poster, movieId)

    movies.push(movie)

    res.redirect('/movies')
})

router.post('/delete-movie', (req,res) => {
    let movieTitle = req.body.movieTitle
    movies = movies.filter(movie => {
        return movie.movieId !== movieTitle
    })
    res.redirect('/movies')
})

router.get('/genre/:genre', (req,res) => {
    let genre = req.params.genre
    newList = movies.filter(movie => {
        return movie.genre == genre
    })
    console.log(newList)
    res.render('moviesearch', {newList: newList})
})

router.get('/:movieId', (req,res) => {
    let movieId = req.params.movieId
    newList = movies.filter(movie => {
        return movie.movieId == movieId
    })
    console.log(newList)
    res.render('moviesearch', {newList: newList})
})

module.exports = router