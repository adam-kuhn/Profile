const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

const getSoftSkills = (testDb) => {
  const db = testDb || connection
  return db('Soft Skills')
    .select('skill', 'description', 'rating')
}

module.exports = {
  getSoftSkills
}
