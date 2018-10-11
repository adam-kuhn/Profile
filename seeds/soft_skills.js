exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Soft Skills').del()
    .then(function () {
      // Inserts seed entries
      return knex('Soft Skills').insert([
        {id: 1, skill: 'Communcation', description: 'I understand the importance of open communcation and trust when working in a team.', rating: 4.5},
        {id: 2, skill: 'Presentation', description: 'I am comfortable in front of a crowd and able to convey my ideas clearly to both technical and non technical audiences', rating: 4.5},
        {id: 3, skill: 'Responsible', description: 'You are able to put your trust in me and I will deliver what is promised.', rating: 4},
        {id: 4, skill: 'Accountable', description: 'I stand up for what I have put forth, and am able to be vulnerable. This is a big aspect in terms of building trust, showing leadership, and learning.', rating: 5},
        {id: 5, skill: 'Agile Techniques', description: 'I have experience with Agile Practices, but could use some more. I am familiar with standups, kanban boards, task estimation, sprints and sprtin planning, backlog prioritisation, and retrospectives', rating: 3.5},
        {id: 6, skill: 'Listening', description: 'One can not be a good communicator without listening. Taking time to listen and learn from others, creates a strong bond between all parties involved.', rating: 4},
        {id: 7, skill: 'Feedback', description: 'Both giving and recieving feedback are extremly important to me. I can provide actionable, specific, and kind feedback, and I alwasy am willing to recieve feedback, as I am always looking to better myself', rating: 5},
        {id: 8, skill: 'Ability to Learn', description: 'I love to learn and try new things. This is one of the reasons why I love programming. I love being challenged and learning new ideas, concepts, and technologies.', rating: 5},
        {id: 9, skill: 'Goal Orientated', description: 'I always strive to be better. I am continually looking to improve and frow in all aspects of life.', rating: 5},
        {id: 10, skill: 'Impact', description: 'Making a positive difference in this world is important. And programming gives me the power to positivily influence the world we live in', rating: 5}
      ])
    })
}
