const path = require('path')

// Requerimos express validator
const { body } = require('express-validator')



// Validaciones

const validationsGoger = [
    body("categories_id").notEmpty().withMessage("Tienes que elegir una categoría"),
    body("fullName").notEmpty().withMessage("Tienes que escribir un nombre"),
    body("description").notEmpty().withMessage("Tienes que agregar una descripción"),
    body("price").notEmpty().withMessage("Tienes que agregar el precio por los servicios del Goger"),
    body("experience").notEmpty().withMessage("Tienes que especificar la experiencia del Goger"),
    body("product_image").custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];



        if (file) {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Formato invalido, extensiones permitidas: ${acceptedExtensions.join(',')}`);
            }
        }
        return true;
    }).notEmpty().withMessage("Tienes que agregar una foto del Goger")
]

module.exports = validationsGoger