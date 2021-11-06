const express = require('express')
const carritoController = require('../controllers/carrito.controller.js')
const router = express.Router()

router.get('/productDetail', carritoController.idProduct)
router.get('/productCar', carritoController.carrito)
router.get('/productDetailAseo', carritoController.detailAseo)
router.get('/productDetailElectricidad', carritoController.detailElectricidad)
router.get('/productDetailPlomeria', carritoController.detailPlomeria)

module.exports = router;