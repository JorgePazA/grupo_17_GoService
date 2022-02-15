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

  create: async (req, res) => {
    try {
      let promCategories = await Category.findAll();
      res.status(200).render("newProduct", { promCategories });
    } catch (error) {
      console.log(error)
    }
    // let promCategories = Category.findAll();

    // Promise
    //   .all([promCategories])
    //   .then(([allCategories]) => {
    //     return res.render(path.resolve(__dirname, '..', 'views', 'newProduct'), { allCategories })
    //   })
    //   .catch(error => res.send(error))
  },
  // Crea el producto en la base de datos
  store: async (req, res) => {

    try {
      const resultValidation = validationResult(req)
      if (resultValidation.errors.length > 0) {
        return res.render('newProduct', {
          errors: resultValidation.mapped(),
          oldData: req.body
        });
      }
      let image = req.file ? req.file.filename : "default.jpg"
      let product = {
        image: image,
        ...req.body
      }
      await gogerModel.addProduct(product)
      res.status(201).redirect("administrar")
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
      let editedProduct = {
        image: req.file.filename,
        ...req.body,
      };
      await gogerModel.updateGoger(editedProduct, req.params.id)
      res.redirect("/administrar");
    } catch (error) {
      console.log(error)
    }
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