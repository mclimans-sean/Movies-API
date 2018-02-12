exports.up = function(knex, Promise) {
  return knex.schema.createTable('genre', table => {
    table.increments();
    table.text('name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('genre');
};
