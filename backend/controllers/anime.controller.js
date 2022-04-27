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
router.get('/:idOrName', async (req, res) => {
    try {
        const arg = req.params.idOrName;
        const anime = isNaN(arg) ? 
                        await Anime.getByName(arg):
                        await Anime.getById(arg);
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
        res.status(500).json({message: err.message});
    }
});

// @desc Update anime
// PATCH Request
router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        const updatedAnime = await Anime.update(id, payload);
        res.status(200).json({message: `Update sucessfully sent`, result: updatedAnime});
    } catch (err) {
        res.status(500).json({message: err.message}); 
    }
});

// @desc Delete anime
// DEL Request
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Anime.delete(id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});


module.exports = router;