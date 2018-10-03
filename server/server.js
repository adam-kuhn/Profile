const path = require('path')
const express = require('express')

const techSkills = require('./routes/tech-skills')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/tech-skills', techSkills)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = server
