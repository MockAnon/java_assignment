
exports.up = function(knex, Promise) {
  return knex.schema.createTable('milestones', table => {
    table.increments('id').primary()
    table.string('descrition', 100)
    table.date('date_archieved')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('milestones')
};
