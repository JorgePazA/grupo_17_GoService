const { userModel } = require("../model");
const db = require('../database/models');
const user = db.users

const {validationResult} = require('express-validator');
const bcryptjs = require("bcryptjs");

const path = require("path");

const userController = {
    // renderizar la página de login
    login: (req, res) => {
        res.status(200).render("login.ejs")
    },
    //renderiza página del perfil del usuario
    userDetail: (req, res) => {
        res.status(200).render("userdetail.ejs",{
            user: req.session.userLogged
        });
    },
    //proceso de login de un usuario
    loginProcess: async (req, res) => {

        try {
            let userToLogin = await userModel.findUserByEmail(req.body.email);
                if(userToLogin){
                    // let isOkayThePassword = bcryptjs.compareSync(req.body.contrasena, userToLogin.contrasena)
                    let isOkayThePassword = req.body.password
                    if(isOkayThePassword){
                        delete userToLogin.password
                        req.session.userLogged = userToLogin;
                        return res.redirect("/userDetail")
                    }
                    return res.render('login', {
                        errors: {
                            email: {
                                msg: 'Las credenciales son invalidas'
                            }
                        }
                    });
                }
                    return res.render('login', {
                        errors: {
                            email: {
                                msg: 'No se encuentra este Email en nuestra base de datos'
                            }
                        }
                    });
        } catch (error) {
            console.log (error)
        }
        
    },
    // renderiza la página de registro
    register: (req, res) => {
        res.status(200).render("register.ejs")
    },
    // guarda un nuevo usuario en la base de datos
    processRegister: async (req, res) => {

        try {
            const resultValidation = validationResult(req);
            if (resultValidation.errors.length > 0){
                return res.render('register', {
                    errors:resultValidation.mapped(),
                    oldData: req.body
                });
            }
    
            let userInDB = await userModel.findUserByEmail(req.body.email);
    
            if(userInDB){
                return res.render('register', {
                    errors:{
                        email:{
                            msg: 'Este email ya se encuentra registrado'
                        }
                    },
                    oldData: req.body
                });
            }
            let userToCreate = {
                 ...req.body
                //  password: bcryptjs.hashSync(req.body.password, 10),
                //  image: req.file.filename
             }
    
            await userModel.create(userToCreate)
            return res.redirect("/login");

        } catch (error) {
            console.log(error)
        }

    },

    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    }

    
};

module.exports = userController;