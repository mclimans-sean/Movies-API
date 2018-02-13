const request = require('supertest');
const expect = require('chai').expect;
const knex = require('../db/knex');

const app = require('../app');

const movieFixtures = require('./movie-fixtures');

describe('CRUD Movies', () => {
  before(done => {
    knex.migrate
      .latest()
      .then(() => {
        return knex.seed.run();
      })
      .then(() => done());
  });

  it('Shows all records', done => {
    request(app)
      .get('/api/v1/movies')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body).to.be.a('array');
        expect(response.body).to.deep.equal(movieFixtures.movies);
        done();
      });
  });

  it('Show one record by id', done => {
    request(app)
      .get('/api/v1/movies/2')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body).to.be.a('object');
        expect(response.body).to.deep.equal(movieFixtures.movies[1]);
        done();
      });
  });

  it('Show one record by id', done => {
    request(app)
      .get('/api/v1/movies/10')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body).to.be.a('object');
        expect(response.body).to.deep.equal(movieFixtures.movies[9]);
        done();
      });
  });

  it('Creates a record', done => {
    request(app)
      .post('/api/v1/movies')
      .send(movieFixtures.movie)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body).to.be.a('object');
        movieFixtures.movie.id = response.body.id;
        expect(response.body).to.deep.equal(movieFixtures.movie);
        done();
      });
  });

  it('Updates a record', done => {
    movieFixtures.movie.title = 'The Other Bros (2018)';
    request(app)
      .put('/api/v1/movies/167')
      .send(movieFixtures.movie)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body).to.be.a('object');
        expect(response.body).to.deep.equal(movieFixtures.movie);
        done();
      });
  });

  it('Deletes a record', done => {
    request(app)
      .delete('/api/v1/movies/167')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body).to.be.a('object');
        expect(response.body).to.deep.equal({
          deleted: true
        });
        done();
      });
  });
});
