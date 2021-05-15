const express = require('express')
const { getAliens, postAliens, deleteAlien, updateAlien } = require('../Controller/AlienController')
const router = express.Router()


router.get('/', getAliens)
router.post('/', postAliens)
router.delete('/:id', deleteAlien)
router.patch('/:id', updateAlien)

module.exports = router