const express = require('express')

const router = express.Router()

const productsController = require('./controllers/productsControllers')

router.get('/products', productsController.getAll )








module.exports = router