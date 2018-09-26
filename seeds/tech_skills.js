exports.seed = function (knex, Promise) {
  return knex('Tech Skills').del()
    .then(function () {
      return knex('Tech Skills').insert([
        {id: 1, skill: 'JavaScript', description: 'JavaScript is my jam', rating: 5},
        {id: 2, skill: 'Node.js', description: 'Strong familarity with Node', rating: 4.5},
        {id: 3, skill: 'React', description: 'I really enjoy how versatille and flexible React is. It makes developmenting Front-End Applications very enjoyable', rating: 5},
        {id: 4, skill: 'Redux', description: 'Strong familarity with Redux. I like how it is this..', rating: 5},
        {id: 5, skill: 'Express', description: 'For my Back End', rating: 4.5},
        {id: 6, skill: 'MongoDB', description: 'I have used MongoDB a few times and do enjoy it. But still have some time to spend before I master it', rating: 3},
        {id: 7, skill: 'SQLite', description: 'I have built numerous server side and full stack applications with SQlite. I use SQLite while building the application and PostgreSQL on deployment', rating: 4.5},
        {id: 8, skill: 'HTML', description: 'HTML...', rating: 5},
        {id: 9, skill: 'CSS', description: 'styling...', rating: 4.5},
        {id: 10, skill: 'Knex.js', description: 'knex used from complex joins...', rating: 4}
      ])
    })
}
