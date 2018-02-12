const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

router.get('/', (req, res) => {
  queries.getAllGenres().then(genres => {
    res.json(genres);
  });
});

module.exports = router;
