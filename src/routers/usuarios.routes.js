const express = require("express");
const usuariosController = require("../controllers/usuarios.controller");
const router = express.Router();

router.get("/login", usuariosController.login);
router.get("/register", usuariosController.register);

module.exports = router;