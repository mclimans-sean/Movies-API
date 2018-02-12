const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}

router.get('/', (req, res) => {
  queries.getAllMovies().then(movies => {
    res.json(movies);
  });
});

router.get('/:id', isValidId, (req, res, next) => {
  queries.getOneMovie(req.params.id).then(movie => {
    if (movie) {
      res.json(movie);
    } else {
      next();
    }
  });
});

module.exports = router;
