const express = require('express');
const router = express.Router();
const Review = require('../models/review.model');
const Anime = require('../models/anime.model');

// @desc Get review by anime id
// GET Request
router.get('/', async (req, res) => {});

// @desc Add new review
// POST Request
router.post('/', async (req, res) => {
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
router.patch('/:id', async (req, res) => {});

// @desc Delete anime review
// DEL Request
router.delete('/:id', async (req, res) => {});


module.exports = router;