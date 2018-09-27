const express = require('express')
const router = express.Router()

const db = require('../db/tech-skills')

router.get('/', (req, res) => {
  db.getTechSkills()
    .then(result => {
      res.status(200).send(result)
    })
})

module.exports = router
