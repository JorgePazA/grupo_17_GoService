const express = require('express')
const carritoController = require('../controllers/carrito.controller.js')
const router = express.Router()

router.get('/productDetail', carritoController.idProduct)
router.get('/productCar', carritoController.carrito)

module.exports = router;