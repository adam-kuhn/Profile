exports.up = function (knex, Promise) {
  return knex.schema.createTable('Tech Skills', (table) => {
    table.increments('id').primary()
    table.string('skill')
    table.string('description')
    table.integer('rating')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('Tech Skills')
}
