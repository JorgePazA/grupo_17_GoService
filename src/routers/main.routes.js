const express = require('express')
const mainController = require('../controllers/main.controller.js')
//const trabajadoresController = require('../controllers/trabajadores.controller.js')
const router = express.Router()

router.get('/', mainController.home)
router.get('/comoFunciona', mainController.comoFunciona)
router.get('/blog', mainController.blog)
router.get('/administrar', mainController.admin)
router.get('/administrar/newProduct', mainController.newProduct)
// router.post('/administrar/newProduct', trabajadoresController.saveNewTrabajador)
router.get('/administrar/editProduct', mainController.editProduct)


module.exports = router;