const knex = require('./knex');

module.exports = {
  getAllMovies() {
    return knex('movie');
  },

  getOneMovie(id) {
    return knex('movie')
      .where('id', id)
      .first();
  },

  create(movie) {
    return knex('movie').insert(movie, '*');
  },

  update(id, movie) {
    return knex('movie')
      .where('id', id)
      .update(movie, '*');
  },

  delete(id) {
    return knex('movie')
      .where('id', id)
      .del();
  },

  getAllGenres() {
    return knex('genre');
  }
};
