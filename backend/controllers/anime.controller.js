const express = require('express');
const router = express.Router();
const Anime = require('../models/anime.model');

// @desc Get all anime
// GET Request
router.get('/', async (req, res) => {
    try {
        const anime = await Anime.getAll();
        res.status(200).json({result: anime});
    } catch(err) {
        res.status(500).json({message: err.message})
    }
});

// @desc Get unique anime
// GET Request
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const anime = await Anime.getById(id);
        res.status(200).json({result: anime});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// @desc Add new anime
// POST Request
router.post('/', async (req, res) => {
    try {
        const animeData = req.body;
        await Anime.create(animeData);
        res.status(201).json({message: `Anime successfully added`});
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

// @desc Update anime
// PATCH Request
router.patch('/', (req, res) => {});

// @desc Delete anime
// DEL Request
router.delete('/:id', (req, res) => {});


module.exports = router;