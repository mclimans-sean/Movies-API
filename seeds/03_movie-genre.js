const moviesGenres = require('../data/movies-genres');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movie_genre')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('movie_genre').insert(moviesGenres);
    });
};
