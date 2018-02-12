exports.up = function(knex, Promise) {
  return knex.schema.createTable('movie_genre', table => {
    table.increments().primary();
    table
      .integer('movie_id')
      .unsigned()
      .references('id')
      .inTable('movie')
      .onDelete('cascade');
    table
      .integer('genre_id')
      .unsigned()
      .references('id')
      .inTable('genre')
      .onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movie_genre');
};
