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
        console.log("params", req.params);
        const { id } = req.params;
        const anime = await Anime.getById(id);
        res.status(200).json({result: anime});
    } catch (err) {
        res.status(500).json({message: err.message})
    }
});

// @desc Add new anime
// POST Request
router.post('/', (req, res) => {});

// @desc Update anime
// PATCH Request
router.patch('/', (req, res) => {});

// @desc Delete anime
// DEL Request
router.delete('/:id', (req, res) => {});


module.exports = router;