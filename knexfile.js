// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/lfp-movies-api'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-lfp-movies-api'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
