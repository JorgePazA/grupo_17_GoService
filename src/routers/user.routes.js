const express = require("express");
const usuariosController = require("../controllers/userController");
const router = express.Router();
const path = require("path");

// Requerimos la carpeta middlewares
const upload = require("../middlewares/multerMiddleware")
const validations = require("../middlewares/validateRegisterMiddleware")
const validationsLogin = require("../middlewares/validateLoginMiddleware")
const guestMiddleware = require("../middlewares/guestMiddleware")
const authMiddleware = require("../middlewares/authMiddleware")


router.get("/login", guestMiddleware, usuariosController.login);
// Procesar el login
router.post("/login", validationsLogin, usuariosController.loginProcess);
// Ruta para ceración de usuario
router.get("/register", guestMiddleware, usuariosController.register);
router.post("/register", upload.single('avatar'), validations, usuariosController.processRegister);




// router.get("/profile/:id", usuariosController.userDetail)
// router.put("/profile/:id", upload.single("product_image"), usuariosController.update)
// router.delete("/login", upload.single("product_image"), usuariosController.delete)


// Ruta para  de usuario
router.get('/userdetail', authMiddleware, usuariosController.userDetail)

// Ruta Logout
router.get('/logout',usuariosController.logout)


module.exports = router;