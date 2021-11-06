const express = require('express')
const mainController = require('../controllers/main.controller.js')
const router = express.Router()

router.get('/', mainController.home)
router.get('/comoFunciona', mainController.comoFunciona)
router.get('/blog', mainController.blog)
router.get('/administrar', mainController.admin)
router.get('/newProduct', mainController.newProduct)
router.get('/editProduct', mainController.editProduct)

module.exports = router;