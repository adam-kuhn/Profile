exports.seed = function (knex, Promise) {
  return knex('Tech Skills').del()
    .then(function () {
      return knex('Tech Skills').insert([
        {id: 1, skill: 'JavaScript', description: 'Extremly proficient. One day I will master it.', rating: 5},
        {id: 2, skill: 'Node.js', description: 'Work with this all the time.', rating: 4.5},
        {id: 3, skill: 'React', description: 'Extremly proficient. One day I will master it.', rating: 5},
        {id: 4, skill: 'Redux', description: 'Extremly proficient. One day I will master it.', rating: 5},
        {id: 5, skill: 'Express', description: 'Work with it all the time.', rating: 4.5},
        {id: 6, skill: 'MongoDB', description: 'Familiar and comfortable with it.', rating: 3},
        {id: 7, skill: 'SQLite', description: 'Very comfortable using this technology.', rating: 4.5},
        {id: 8, skill: 'HTML', description: 'Very comfortable using this technology. One day I will master it.', rating: 5},
        {id: 9, skill: 'CSS', description: 'Very comfortable using this technology. One day I will master it.', rating: 4.5},
        {id: 10, skill: 'Knex.js', description: 'Extremly proficient. One day I will master it.', rating: 4},
        {id: 11, skill: 'PostgreSQL', description: 'Familiar and comfortable with it.', rating: 3.5},
        {id: 12, skill: 'Git', description: 'Familiar and comfortable with it. But there is a more rabbit hole to dive into.', rating: 4},
        {id: 13, skill: 'GitHub', description: 'Very comfortable using this technology.', rating: 4},
        {id: 14, skill: "API's", description: 'Very comfortable using this technology. One day I will master it.', rating: 4},
        {id: 15, skill: 'Webpack', description: 'Very comfortable using this technology.', rating: 3.5},
        {id: 16, skill: 'Jest', description: 'Extremly proficient. One day I will master it.', rating: 4},
        {id: 17, skill: 'Deployment', description: 'Able to do it, but have not done it often. Still more to learn and experience to be gained.', rating: 3},
        {id: 18, skill: 'VS-code', description: 'Extremly proficient with this technology. Still more to learn, but one day I will master it.', rating: 4.5}
      ])
    })
}
