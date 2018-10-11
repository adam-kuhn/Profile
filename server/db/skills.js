const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

const getTechSkills = (table, testDb) => {
  const db = testDb || connection
  return db(table)
    .select('id', 'skill', 'description', 'rating')
}

module.exports = {
  getTechSkills
}
