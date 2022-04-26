const express = require('express');
const router = express.Router()

// @desc Get all anime
// GET Request
router.get('/', (req, res) => {});

// @desc Get unique anime
// GET Request
router.get('/:id', (req, res) => {});

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