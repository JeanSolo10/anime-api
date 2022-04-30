const express = require('express');
const router = express.Router();
const Review = require('../models/review.model');
const Anime = require('../models/anime.model');

// @desc Get all reviews
// GET Request
// @params: accepts anime_id parameter
router.get('/', async (req, res) => {
    try {
        if (req.query === {}) {
            const reviews = await Review.getReviewByAnimeId(req.query.anime_id);
            res.status(200).json({results: reviews});
        } else {
            const reviews = await Review.getAll();
            res.status(200).json({results: reviews});
        }
    } catch(err) {
        res.status(500).json({message: err.message})
    }
});

// @desc Add new review
// POST Request
router.post('/', async (req, res) => {
    try {
        const reviewData = req.body;
        if (!(await Anime.getById(reviewData.anime_id))) {
            throw Error(`Anime with id: ${reviewData.anime_id} not found!`);
        }
        const review = await Review.create(reviewData);
        res.status(201).json({message: `Review successfully added`, results: review});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// @desc Update anime review
// PATCH Request
router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const updatedAnimeReview = await Review.update(id, payload);
        res.status(200).json({message: `Update sucessfully sent`, results: updatedAnimeReview});
    } catch (err) {
        res.status(500).json({message: err.message}); 
    }
});

// @desc Delete anime review
// DEL Request
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Review.delete(id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});


module.exports = router;