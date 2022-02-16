const { gogerModel } = require("../model");
const db = require('../database/models')
const Category = db.categories
const { validationResult } = require('express-validator');

const path = require("path");

// const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const carritoController = {

  detailAseo: async (req, res) => {
    let gogersAseo = await gogerModel.getGoger(3)
    res.status(200).render("productDetailAseo", { gogersAseo })

  },
  detailElectricidad: async (req, res) => {
    let gogersElectricidad = await gogerModel.getGoger(2)
    res.status(200).render("productDetailElectricidad", { gogersElectricidad })

  },
  detailPlomeria: async (req, res) => {
    let gogersPlomeria = await gogerModel.getGoger(1)
    res.status(200).render("productDetailPlomeria", { gogersPlomeria })
  },

  //Me renderiza por ID en vista product-detail
  detail: async (req, res) => {
    let id = parseInt(req.params.id);
    let proveedor = await gogerModel.getOne(id);
    res.status(200).render("product-detail", { proveedor })
  },
  showCar: async (req, res) => {
    let id = parseInt(req.params.id);
    let proveedor = await gogerModel.getOne(id);

    res.status(200).render("productCar", { proveedor });
  },

  //Me renderiza en Administrar
  list: async (req, res) => {
    let proveedores = await gogerModel.getAll()
    res.status(200).render("administrar", { proveedores });
  },
// Me renderiza la páagina de crear Goger
  create: async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.status(200).render("newProduct", { categories });
    } catch (error) {
      console.log(error)
    }
  },
  // Crea el producto en la base de datos
  store: async function (req, res) {

    try {
      const categories = await Category.findAll()
      const resultValidation = validationResult(req)

      if (resultValidation.isEmpty()){
        let image = req.file ? req.file.filename  : "default.jpg"
        let product = {
          image: image,
          ...req.body
        }
        await gogerModel.addProduct(product)
        res.redirect("administrar")
      } else {
        console.log(resultValidation.mapped())
        res.render("newProduct", {
          errors: resultValidation.mapped(),
          oldData: req.body,
          categories
          });
      }
    } catch (error) {
        console.log(error)
    }
  },
  //renderiza la página de edición
  edit: async (req, res) => {
    try {
      let id = parseInt(req.params.id);
      let proveedor = await gogerModel.getOne(id);

      res.status(200).render("editProduct", { proveedor });
    } catch (error) {
      console.log(error)
    }
  },
  // Actualiza un Goger
  update: async (req, res) => {

    try {
      const resultValidation = validationResult(req)
      let id = parseInt(req.params.id);
      let proveedor = await gogerModel.getOne(id);

      if (resultValidation.isEmpty()){
        let image = req.file ? req.file.filename  : "default.jpg"
        let editedProduct = {
          image: image,
          ...req.body
        }
        await gogerModel.updateGoger(editedProduct, req.params.id)
        res.redirect("/administrar");
      } else {
        console.log(resultValidation.mapped())
        res.render("editProduct", {
          errors: resultValidation.mapped(),
          oldData: req.body,
          proveedor
          });
      }
    } catch (error) {
        console.log(error)
    }



    // try {
    //   let editedProduct = {
    //     image: req.file.filename,
    //     ...req.body,
    //   };
    //   await gogerModel.updateGoger(editedProduct, req.params.id)
    //   res.redirect("/administrar");
    // } catch (error) {
    //   console.log(error)
    // }
  },
  // Borra un Goger
  delete: async (req, res) => {
    try {
      await gogerModel.destroyGoger(req.params.id);
      res.redirect("/administrar")
    }
    catch (error) {
      console.log(error);
    }
  },
};

module.exports = carritoController;