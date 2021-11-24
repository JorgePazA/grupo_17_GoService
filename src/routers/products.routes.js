const express = require('express')
const controler = require('../controllers/products.controller.js')
const router = express.Router()

//router.get('/productDetail', controler.idProduct)
router.get('/productCar', controler.carrito)

//Rutas para las vistas de los Servicios
router.get('/productDetailAseo', controler.detailAseo)
router.get('/productDetailElectricidad', controler.detailElectricidad)
router.get('/productDetailPlomeria', controler.detailPlomeria)

//Ruta para el detalle del proveedor
router.get("productDetailAseo/:id", controler.detail)
router.get("productDetailElectricidad/:id", controler.detail)
router.get("productDetailPlomeria/:id", controler.detail)

module.exports = router;