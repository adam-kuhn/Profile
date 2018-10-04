const express = require('express')
const router = express.Router()

const db = require('../db/skills')

router.post('/', (req, res) => {
  const table = req.body.skillType
  db.getTechSkills(table)
    .then(result => {
      res.status(200).send(result)
    })
})

module.exports = router
