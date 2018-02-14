# MOVIES-API

## An API for Movies and their Genres

## Routes - Movies:

### GET route - List all movies

* /api/v1/movies

### GET route - List one movie

* /api/v1/movies/<movie id>
* example: /api/v1/movies/10
* returns:
* {
  "id": 10,
  "title": "GoldenEye (1995)",
  "genre": [
  {
  "id": 1,
  "name": "Action"
  },
  {
  "id": 2,
  "name": "Adventure"
  },
  {
  "id": 16,
  "name": "Thriller"
  }
  ]
  }

### POST route - add a movie

* /api/v1/movies
* Structure example:
* {
  "id": 151,
  "name": "The Others Guys (2010)"
  }

### PUT route - Update a movie

* /api/v1/movies/<movie id>

### DELETE route - Delete a movie

* /api/v1/movies/<movie id>

## Routes - Genres:

### GET route - List all Genres

* /api/v1/genres

### GET route - List movies associated with specific genre

* /api/v1/genres/<genre id>
* example: /api/v1/genres/5
