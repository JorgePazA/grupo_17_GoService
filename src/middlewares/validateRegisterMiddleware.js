const path = require('path')

// Requerimos express validator
const { body } = require('express-validator')


  
// Validaciones

const validations = [
    body("name").notEmpty().withMessage("Tienes que escribir un nombre"),
    body("lastName").notEmpty().withMessage("Tienes que escribir un apellido"),
    body("email").notEmpty().withMessage("Tienes que escribir un email").bail()
    .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body("password").notEmpty().withMessage("Tienes que escribir una contraseña"),
    body("passwordVal").notEmpty().withMessage("Tienes que confirmar tu contraseña"),
    body("avatar").custom((value,{req}) =>{
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
        


        if (file){
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Formato invalido, extensiones permitidas: ${acceptedExtensions.join(',')}`);
            }
        }
        return true;
    })
]

module.exports = validations