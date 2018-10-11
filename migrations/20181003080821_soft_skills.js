exports.up = function (knex, Promise) {
  return knex.schema.createTable('Soft Skills', (table) => {
    table.increments('id').primary()
    table.string('skill')
    table.string('description')
    table.integer('rating')
  })
}

exports.down = function (knex, Promise) {
  return knex.scehema.dropTable('Soft Skills')
}
