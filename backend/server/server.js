const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

const animeController = require('../controllers/anime.controller');
const reviewController = require('../controllers/review.controller');

// Anime Routes
app.use('/api/v1/anime/', animeController);
app.use('/api/v1/review/anime/', reviewController);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})