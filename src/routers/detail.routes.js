const express = require('express');
const carritoController = require('../controllers/carrito.controller.js');
const router = express.Router();

router.get("/plomeriaDetails", carritoController.detailPlomeria1);

module.exports = router;