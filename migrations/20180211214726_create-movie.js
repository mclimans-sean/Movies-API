exports.up = function(knex, Promise) {
  return knex.schema.createTable('movie', table => {
    table.increments();
    table.text('title');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movie');
};
