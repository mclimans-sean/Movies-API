const knex = require('./knex');

module.exports = {
  getAllMovies() {
    return knex('movie');
    // .select('movie.id', 'title', ' name')
    // .from('movie')
    // .join('movie_genre', 'movie_id', 'movie.id')
    // .join('genre', 'genre_id', 'genre.id');
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
  },

  getAllMoviesByGenre(id) {
    return knex
      .select('movie.id', 'title')
      .from('genre')
      .where('genre_id', id)
      .join('movie_genre', 'genre_id', 'genre.id')
      .join('movie', 'movie_id', 'movie.id');
  }
};
