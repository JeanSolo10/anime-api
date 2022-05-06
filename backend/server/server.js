const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());

const animeController = require('../controllers/anime.controller');
const reviewController = require('../controllers/review.controller');

// Anime Routes
app.use('/api/v1/anime/', animeController);
app.use('/api/v1/reviews/', reviewController);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve(__dirname, "../..", "frontend", "build")));
    app.get('*', (req, res) => {
        req.sendFile(path.resolve(__dirname, "../..", "frontend", "build", "index.html"))
    });
}


app.listen(port, () => {
    console.log(process.env.NODE_ENV)
    console.log(`Server running on port: ${port}`);
})