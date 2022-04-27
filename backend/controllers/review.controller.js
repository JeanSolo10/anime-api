const express = require('express');
const router = express.Router();
const Review = require('../models/review.model');

// @desc Get review by anime id
// GET Request
router.get('/:id', async (req, res) => {});

// @desc Add new review
// POST Request
router.post('/:id', async (req, res) => {});

// @desc Update anime review
// PATCH Request
router.patch('/:id', async (req, res) => {});

// @desc Delete anime review
// DEL Request
router.delete('/:id', async (req, res) => {});


module.exports = router;