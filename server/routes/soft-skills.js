const express = require('express')
const router = express.Router()

const db = require('../db/soft-skills')

router.get('/', (req, res) => {
  db.getSoftSkills()
    .then(result => {
      res.status(200).send(result)
    })
})

module.exports = router
