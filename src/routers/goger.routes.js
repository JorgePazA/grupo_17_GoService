const express = require('express')
const controler = require('../controllers/gogerController.js')
const router = express.Router()
const path = require("path")

//Definiendo la carpeta en la que se guardarán los archivos subidos por el usuario
const multer = require("multer")
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = "public/img"
    cb(null, folder)
  },

  filename: (req, file, cb) => {
    let imageName = file.fieldname + "_" + Date.now() + path.extname(file.originalname) 
    cb(null, imageName)
  }
})

let upload = multer({storage: storage})





router.get('/productCar', controler.showCar)
router.get('/productCar/:id', controler.showCar)

//Rutas para las vistas de los Servicios
router.get('/productDetailAseo', controler.detailAseo)
router.get('/productDetailElectricidad', controler.detailElectricidad)
router.get('/productDetailPlomeria', controler.detailPlomeria)

// //Ruta para el detalle del proveedor
router.get("/productDetailAseo/:id", controler.detail)
router.get("/productDetailElectricidad/:id", controler.detail)
router.get("/productDetailPlomeria/:id", controler.detail)

// //Ruta Página de administración
router.get("/administrar", controler.list)

// //Ruta para la creación de proveedor
router.get("/administrar/newProduct", controler.create)
router.post("/administrar", upload.single("product_image"), controler.store)


// //Rutas para la edición de proveedor
// router.get("/administrar/editProduct/:id", controler.edit)
// router.put("/administrar/:id", upload.single("product_image"), controler.update)

// // Página de product-deletion
// router.delete("/administrar/:id", controler.delete)


module.exports = router;