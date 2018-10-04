const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

const getTechSkills = (testDb) => {
  const db = testDb || connection
  return db('Tech Skills')
    .select('id', 'skill', 'description', 'rating')
}

module.exports = {
  getTechSkills
}
