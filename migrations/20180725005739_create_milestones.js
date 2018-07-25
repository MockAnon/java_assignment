
exports.up = function(knex, Promise) {
  return knex.schema.createTable('milestones', table => {
    table.increments('id').primary()
    table.string('descrition', 100)
    table.date('date_archieved')
    table.integer('foreign_person_id')
    table.foreign('foreign_person_id').references('id').inTable('famous_people')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('milestones')
};