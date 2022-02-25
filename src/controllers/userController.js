const { userModel } = require("../model");
const db = require('../database/models');
const user = db.users

const {validationResult} = require('express-validator');
const bcryptjs = require("bcryptjs");
// const users = require("../database/models/users");

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
    editUser: async (req, res) => {
        let id = parseInt(req.params.id)
        let user = await userModel.getOne(id)
        res.status(200).render("editUser",{user});
    },
    //proceso de login de un usuario
    loginProcess: async (req, res) => {

        try {
            let userToLogin = await userModel.findUserByEmail(req.body.email);
                if(userToLogin){
                    let isOkayThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
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
            let avatar = req.file ? req.file.filename : "default.jpg"
            let userToCreate = {
                 ...req.body,
                 avatar: avatar,
                 rol: 1,
                 password: bcryptjs.hashSync(req.body.password, 10)
             }
            await userModel.create(userToCreate)
            return res.status(201).redirect("/login");

        } catch (error) {
            console.log(error)
        }
    },
    update: async (req, res) => {
        try {
        const resultValidation = validationResult(req)
        let id = parseInt(req.params.id)
        let user = await userModel.getOne(id)

        if (resultValidation.isEmpty()){
            let image = req.file ? req.file.filename  : "default.jpg";
            let editedUser = {
                ... req.body,
                avatar : image,
                password: bcryptjs.hashSync(req.body.password, 10)
              };
              await userModel.updateUser(editedUser, req.params.id)
              res.redirect("/userdetail"); 
        } else {
        console.log(resultValidation.mapped())
        res.render("editUser", {
          errors: resultValidation.mapped(),
          oldData: req.body,
          user
          });
        }
          
        } catch (error){
          console.log(error)
        }
      },
    // eliminar cuenta
    delete: async (req, res) => {
        try{
          await userModel.destroyUser(req.params.id);
          res.redirect("/login")
        }
        catch(error) {
          console.log(error);
        }
      },
    // cerrar sesión
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    },
};

module.exports = userController;