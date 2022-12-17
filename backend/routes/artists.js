const express = require('express')
const {
  crudAll,
  crudDayOne,
  crudDayTwo,
  crudDayThree,
  crudDayFour,
  crudDayFive,
  crudOne,
  crudPost,
  crudUpdate,
  crudDelete
} = require('../controllers/artistController')

const router = express.Router()

// GET all
router.get('/', crudAll)

// GET day 1
router.get('/day/1', crudDayOne)
// GET day 2
router.get('/day/2', crudDayTwo)
// GET day 3
router.get('/day/3', crudDayThree)
// GET day 4
router.get('/day/4', crudDayFour)
// GET day 5
router.get('/day/5', crudDayFive)

// GET a single
router.get('/:id', crudOne)

// POST
router.post('/', crudPost)

// DELETE
router.delete('/:id', crudDelete)

// UPDATE
router.patch('/:id', crudUpdate)

module.exports = router