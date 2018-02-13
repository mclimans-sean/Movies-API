const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

router.get('/', (req, res) => {
  queries.getAllGenres().then(genres => {
    res.json(genres);
  });
});

router.get('/:id', (req, res) => {
  queries.getAllMoviesByGenre(req.params.id).then(genre => {
    res.json(genre);
  });
});

module.exports = router;
