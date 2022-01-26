const { gogerModel } = require("../model");
const db = require('../database/models')
const Category = db.categories

const path = require("path");

// const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const carritoController = {


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
// Crea el producto en la base de datos
  store: async (req, res) => {
    
    try {
      let image = req.file ? req.file.filename  : "default.jpg"
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
      console.log (error)
    }
  },
// Actualiza un Goger
  update: async (req, res) => {
    try {
      let editedProduct = {
        image : req.file.filename,
        ... req.body,
      };
      await gogerModel.updateGoger(editedProduct, req.params.id)
      res.redirect("/administrar");
    } catch (error){
      console.log(error)
    }
  },
// Borra un Goger
  delete: async (req, res) => {
    try{
      await gogerModel.destroyGoger(req.params.id);
      res.redirect("/administrar")
    }
    catch(error) {
      console.log(error);
    }
  },
};

module.exports = carritoController;