const path = require('path')

// Requerimos express validator
const { body } = require('express-validator')

// Validaciones

const validationsLogin = [
    body("email").notEmpty().withMessage("Tienes que ingresar tu email").bail()
    .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body("password").notEmpty().withMessage("Tienes que escribir tu contraseña"),
]

module.exports = validationsLogin