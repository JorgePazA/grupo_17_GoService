const path = require('path')

// Requerimos express validator
const { check } = require('express-validator')



// Validaciones

const validationsGoger = [
    // check("category").notEmpty().withMessage("Tienes que elegir una categoría"),
    check("fullName").notEmpty().withMessage("Tienes que escribir un nombre").bail()
        .isLength(5).withMessage("El nombre de tener al menos 5 caracteres"),
    check("description").notEmpty().withMessage("Tienes que agregar una descripción").bail()
        .isLength(20).withMessage("La descripción debe contener al menos 20 caracteres"),
    check("price").notEmpty().withMessage("Tienes que agregar el precio por los servicios del Goger"),
    check("experience").notEmpty().withMessage("Tienes que especificar la experiencia del Goger"),
    check("image").custom((value, { req }) => {
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

module.exports = validationsGoger