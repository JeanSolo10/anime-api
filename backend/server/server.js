const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const animeController = require('../controllers/anime.controller');
const reviewController = require('../controllers/review.controller');

// Anime Routes
app.use('/api/v1/anime/', animeController);
app.use('/api/v1/review/', reviewController);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})