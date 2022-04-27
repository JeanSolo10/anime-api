const express = require('express');
const router = express.Router();
const Review = require('../models/review.model');
const Anime = require('../models/anime.model');

// @desc Get all reviews
// GET Request
router.get('/', async (req, res) => {
    try {
        const reviews = await Review.getAll();
        res.status(200).json({result: reviews});
    } catch(err) {
        res.status(500).json({message: err.message})
    }
});

// @desc Get reviews by anime id
// GET Request
router.get('/anime/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const reviews = await Review.getReviewByAnimeId(id);
        res.status(200).json({result: reviews});
    } catch(err) {
        res.status(500).json({message: err.message})
    }
});

// @desc Add new review
// POST Request
router.post('/anime', async (req, res) => {
    try {
        const reviewData = req.body;
        if (!(await Anime.getById(reviewData.anime_id))) {
            throw Error(`Anime with id: ${reviewData.anime_id} not found!`);
        }
        await Review.create(reviewData);
        res.status(201).json({message: `Anime successfully added`});
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
        res.status(200).json({message: `Update sucessfully sent`, result: updatedAnimeReview});
    } catch (err) {
        res.status(500).json({message: err.message}); 
    }
});

// @desc Delete anime review
// DEL Request
router.delete('/:id', async (req, res) => {});


module.exports = router;