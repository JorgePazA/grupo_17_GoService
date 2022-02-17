const path = require('path')

// Requerimos express validator
const { body } = require('express-validator')

// Validaciones
const validationsEditUser = [
    body("name").notEmpty().withMessage("Tienes que escribir un nombre").bail()
        .isLength(2).withMessage("El nombre de tener al menos 2 caracteres"),
    body("lastName").notEmpty().withMessage("Tienes que escribir tu apellido").bail()
        .isLength(2).withMessage("El apellido debe contener al menos 2 caracteres"),
    body("password").notEmpty().withMessage("Tienes que escribir una contraseña").bail()
        .isStrongPassword({ minSymbols: 0 }).withMessage("La contraseña debe tener al menos 8 caracteres, dentro de los cuales debe existir al menos un número, una letra mayúscula y una minúscula"),
    body("passwordVal").notEmpty().withMessage("Tienes que confirmar tu contraseña").bail()
        .custom((value, {req}) => value === req.body.password).withMessage("Las contraseñas deben coincidir"),
    body("avatar").custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

        if (file) {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Formato invalido, extensiones permitidas: ${acceptedExtensions.join(',')}`);
            }
        }
        return true;
    })
]

module.exports = validationsEditUser