const { gogerModel } = require("../model");
const db = require('../database/models')
const Category = db.categories

const path = require("path");

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const carritoController = {
  // Me renderiza los proveedores en las vistas de los servicios
  // detailAseo: (req, res) => {
  //   res.render(path.resolve(__dirname, "..", "views", "productDetailAseo"), {
  //     proveedores: productsDB,
  //   });
  // },

  detailAseo: async (req, res) => {
    let gogersAseo = await gogerModel.getAseo()
    res.status(200).render("productDetailAseo", {gogersAseo})
    
  },
  detailElectricidad: async (req, res) => {
    let gogersElectricidad = await gogerModel.getElectricidad()
    res.status(200).render("productDetailElectricidad", {gogersElectricidad})
    
  },
  detailPlomeria: async (req, res) => {
    let gogersPlomeria = await gogerModel.getPlomeria()
    res.status(200).render("productDetailPlomeria", {gogersPlomeria})
    
  },

  // detailElectricidad: (req, res) => {
  //   res.render(
  //     path.resolve(__dirname, "..", "views", "productDetailElectricidad"),
  //     { proveedores: productsDB }
  //   );
  // },
  // detailPlomeria: (req, res) => {
  //   res.render(
  //     path.resolve(__dirname, "..", "views", "productDetailPlomeria"),
  //     { proveedores: productsDB }
  //   );
  // },
  //Me renderiza por ID en vista product-detail
  detail: async (req, res) => {
    let id = parseInt(req.params.id);
    let proveedor = await gogerModel.getOne(id);
    res.status(200).render("product-detail", {proveedor})
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

  create: (req, res) => {
    let promCategories = Category.findAll();
    
    Promise
    .all([promCategories])
    .then(([allCategories]) => {
        return res.render(path.resolve(__dirname, '..', 'views',  'newProduct'), {allCategories})})
    .catch(error => res.send(error))
  },

  store: async (req, res) => {
    let product = req.body
    let fileName = req.file.filename || "default.png"

    try {
        await gogerModel.addProduct(product, fileName)
        res.status(201).redirect("administrar")
    } catch (error) {
        console.log(error)
    }
  },

  edit: (req, res) => {
    let id = parseInt(req.params.id);
    let proveedor = productsModel.getProduct(id);

    res.render("editProduct", { proveedor, toThousand });
  },

  update: (req, res) => {
    let id = parseInt(req.params.id);
    let proveedor = req.body;
    let fileName = req.file.filename || null;

    productsModel.editProduct(id, proveedor, fileName);

    res.redirect("/administrar");
  },

  delete: (req, res) => {
    let id = parseInt(req.params.id);

    productsModel.deleteProduct(id);

    res.redirect("/administrar");
  },
};

module.exports = carritoController;