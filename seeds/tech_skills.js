exports.seed = function (knex, Promise) {
  return knex('Tech Skills').del()
    .then(function () {
      return knex('Tech Skills').insert([
        {id: 1, skill: 'JavaScript', description: 'JavaScript is the first language I have learned and I really enjoy working with it.', rating: 5},
        {id: 2, skill: 'Node.js', description: 'Runs my backend code.', rating: 4.5},
        {id: 3, skill: 'React', description: 'I really enjoy how versatille and flexible React is. It makes developmenting Front-End Applications very enjoyable.', rating: 5},
        {id: 4, skill: 'Redux', description: 'I can easily keep track of complex states with the use of Redux.', rating: 5},
        {id: 5, skill: 'Express', description: 'My web server framework of choice.', rating: 4.5},
        {id: 6, skill: 'MongoDB', description: 'I have used MongoDB a few times and do enjoy it. But still have some time to spend before I master it.', rating: 3},
        {id: 7, skill: 'SQLite', description: 'I have built numerous server side and full stack applications with SQlite. I use SQLite while building the application and PostgreSQL on deployment.', rating: 4.5},
        {id: 8, skill: 'HTML', description: 'I would not be much of a web developer if I did not know HTML, would I?', rating: 5},
        {id: 9, skill: 'CSS', description: 'Not my most favorite part of a project, but darn can Flex Box make life easy.', rating: 4.5},
        {id: 10, skill: 'Knex.js', description: 'I have used Knex.js to query simple data bases to, bears with numerous many to many relationships.', rating: 4},
        {id: 11, skill: 'PostgreSQL', description: 'I used SQLite for development but when deploying the applicaton I use PostgreSQL.', rating: 3.5},
        {id: 12, skill: 'Git', description: 'Git saves my life when it comes to keeping projects organized.', rating: 4},
        {id: 13, skill: 'GitHub', description: 'I have used GitLab but I prefer GitHub', rating: 4},
        {id: 14, skill: "API's", description: "Testing, creating, and accessing third party API's from the Client or Server are nothing new to me.", rating: 4},
        {id: 15, skill: 'Webpack', description: 'I am familiar with updating webpack.config to suit the projects needs. For example adding specific rules or loaders.', rating: 3.5},
        {id: 16, skill: 'Jest', description: 'I am always sure to write testable code, test my code, and when possible perform TDD (Test Driven Development)', rating: 4},
        {id: 17, skill: 'Deployment', description: 'Hey this site is live it not? So I must be able to do that :).', rating: 3},
        {id: 18, skill: 'VS-code', description: 'Code editor of choice. I like the integration with git and the built-in debugger.', rating: 4.5}
      ])
    })
}
