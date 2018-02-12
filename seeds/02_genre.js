const genres = require('../data/genres');

exports.seed = function(knex, Promise) {
  return knex('genre')
    .del()
    .then(function() {
      return knex('genre').insert(genres);
    });
};
