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

  getAllGenres() {
    return knex('genre');
  }
};
