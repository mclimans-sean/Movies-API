const knex = require('./knex');

module.exports = {
  getAllMovies() {
    // return knex('movie');
    function groupGenres(genres) {
      return genres.reduce((result, genre) => {
        result[genre.movie_id] = result[genre.movie_id] || [];
        result[genre.movie_id].push(genre);
        return result;
      }, {});
    }

    function populateMovies(movies, genres) {
      let groupedGenres = groupGenres(genres);

      return movies.map(movie => {
        movie.genres = groupedGenres[movie.id] || [];
        return movie;
      });
    }

    function getGenresForAllMovies(movies) {
      return knex('genre')
        .join('movie_genre', 'genre_id', 'genre.id')
        .whereIn('movie_id', movies.map(movie => movie.id));
    }

    function getMovies() {
      return knex('movie');
    }

    function getMoviesWithGenres() {
      return getMovies().then(movies => {
        return getGenresForAllMovies(movies).then(genres => {
          populateMovies(movies, genres);
          return movies;
        });
      });
    }
    return getMoviesWithGenres();
  },

  getOneMovie(id) {
    function getMovie(id) {
      return knex('movie')
        .where('id', id)
        .first();
    }
    function getGenresForMovies(movieId) {
      return knex('genre')
        .select('genre.id', 'name')
        .join('movie_genre', 'genre_id', 'genre.id')
        .where('movie_id', movieId);
    }
    function getMovieWithGenres(movieId) {
      return Promise.all([getMovie(movieId), getGenresForMovies(movieId)]).then(
        function(results) {
          let [movie, genre] = results;
          movie.genre = genre;
          return movie;
        }
      );
    }
    return getMovieWithGenres(id);
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
  },

  addGenre(id) {
    return knex('movie')
      .where('id', id)
      .first()
      .then(movie => {
        if (!movie) {
          const err = new Error('movie does not exist');
          err.status = 400;
          throw err;
        }
      });
    return knex('genre').where('name', name);
    return knex('movie_genre').insert({
      movie_id: id,
      genre_id: genre.id
    });
  }
};
