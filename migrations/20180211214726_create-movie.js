exports.up = function(knex, Promise) {
  return knex.schema.createTable('movie', table => {
    table.increments();
    table.text('title');
    table.integer('year');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movie');
};
