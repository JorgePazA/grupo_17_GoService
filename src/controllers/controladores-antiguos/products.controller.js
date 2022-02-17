const { productsDB } = require("../data");
const { productsModel } = require("../model");

const path = require("path");

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const carritoController = {
  // Me renderiza los proveedores en las vistas de los servicios
  detailAseo: (req, res) => {
    res.render(path.resolve(__dirname, "..", "views", "productDetailAseo"), {
      proveedores: productsDB,
    });
  },
  detailElectricidad: (req, res) => {
    res.render(
      path.resolve(__dirname, "..", "views", "productDetailElectricidad"),
      { proveedores: productsDB }
    );
  },
  detailPlomeria: (req, res) => {
    res.render(
      path.resolve(__dirname, "..", "views", "productDetailPlomeria"),
      { proveedores: productsDB }
    );
  },
  //Me renderiza por ID en vista product-detail
  detail: (req, res) => {
    let id = parseInt(req.params.id);
    let proveedor = productsModel.getProduct(id);

    res.render("product-detail", { proveedor, toThousand });
  },
  showCar: (req, res) => {
    let id = parseInt(req.params.id);
    let proveedor = productsModel.getProduct(id);

    res.render("productCar", { proveedor, toThousand });
  },

  //Me renderiza en Administrar
  list: (req, res) => {
    res.render("administrar", { proveedores: productsDB, toThousand });
  },

  create: (req, res) => {
    res.render("newProduct", { proveedores: productsDB, toThousand });
  },

  store: (req, res) => {
    productsModel.addProduct(req.body, req.file.filename);

    res.redirect("administrar");
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
