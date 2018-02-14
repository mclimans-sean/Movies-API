const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}

function validMovie(movie) {
  const hasTitle = typeof movie.title == 'string' && movie.title.trim() != '';
  return hasTitle;
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

router.post('/', (req, res, next) => {
  if (validMovie(req.body)) {
    queries.create(req.body).then(movies => {
      res.json(movies[0]);
    });
  } else {
    next(new Error('Invalid Movie'));
  }
});

router.post('/:id/genre', isValidId, (req, res) => {
  queries.addGenre(req.body).then(genre => {
    res.json(genre);
  });
});

router.put('/:id', isValidId, (req, res, next) => {
  if (validMovie(req.body)) {
    queries.update(req.params.id, req.body).then(movies => {
      res.json(movies[0]);
    });
  } else {
    next(new Error('Invalid Movie'));
  }
});

router.delete('/:id', isValidId, (req, res) => {
  queries.delete(req.params.id).then(() => {
    res.json({
      deleted: true
    });
  });
});

module.exports = router;
