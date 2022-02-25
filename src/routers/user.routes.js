const express = require("express");
const usuariosController = require("../controllers/userController");
//const usersApi = require("../api/usersApi");
const router = express.Router();
const path = require("path");

// Requerimos la carpeta middlewares
const upload = require("../middlewares/multerMiddleware")
const validations = require("../middlewares/validateRegisterMiddleware")
const validationsLogin = require("../middlewares/validateLoginMiddleware")
const guestMiddleware = require("../middlewares/guestMiddleware")
const authMiddleware = require("../middlewares/authMiddleware")
const validationsEditUser = require("../middlewares/validateEditUserMiddleware")


router.get("/login", guestMiddleware, usuariosController.login);
// Procesar el login
router.post("/login", validationsLogin, usuariosController.loginProcess);
// Ruta para creación de usuario
router.get("/register", guestMiddleware, usuariosController.register);
router.post("/register", upload.single('avatar'), validations, usuariosController.processRegister);

//Rutas para la edición de usuarios
router.get("/userdetail/editUser/:id", usuariosController.editUser)
router.put("/userdetail/:id", upload.single("avatar"), validationsEditUser, usuariosController.update)
router.delete("/userdetail/:id", usuariosController.delete)

// Ruta para  de usuario
router.get('/userdetail', authMiddleware, usuariosController.userDetail)

//router.get('/api/users', usersApi.list)

// Ruta Logout
router.get('/logout', usuariosController.logout)


module.exports = router;