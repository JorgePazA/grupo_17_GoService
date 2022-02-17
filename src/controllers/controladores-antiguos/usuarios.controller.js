const { usersDB } = require("../data");
const { usersModel } = require("../model");

const path = require("path");

const {validationResult} = require('express-validator');
const bcryptjs = require("bcryptjs");


const usuariosController = {

    login: (req, res) => {
        res.render("login.ejs")
    },
    userDetail: (req, res) => {
        res.render("userdetail.ejs",{
            user: req.session.userLogged
        });
    },

    loginProcess: (req, res) => {
        
        let userToLogin = usersModel.findByField('email', req.body.email);
            if(userToLogin){
                let isOkayThePassword = bcryptjs.compareSync(req.body.contrasena, userToLogin.contrasena)
                if(isOkayThePassword){
                    delete userToLogin.contrasena
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
    },

    register: (req, res) => {
        res.render("register.ejs")
    },

    processRegister: (req, res) => {
        const resultValidation =  validationResult(req);
        if (resultValidation.errors.length > 0){
            return res.render('register', {
                errors:resultValidation.mapped(),
                oldData: req.body
            });
        }

        let userInDB = usersModel.findByField('email', req.body.email);

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
             ...req.body,
             contrasena: bcryptjs.hashSync(req.body.contrasena, 10),
             avatar: req.file.filename
         }

        let userCreated = usersModel.create(userToCreate)
        return res.redirect("/login");

    },

    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    }

    
};

// CRUD usuarios


module.exports = usuariosController;