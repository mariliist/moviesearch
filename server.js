const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/search', (req, res) => {
    res.render('search',{ movieDetails: '' });
 });

app.post('/search', (req, res)=>{
    let movieData = {
        title: 'Free Guy',
        year: 2021,
        genres: 'Comedy, Action',
        overview: 'Let there be some text',
        posterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg'
    };

    res.render('search', { movieDetails: movieData });

});

app.listen(3000, () => {
    console.log('Server is running running')
});