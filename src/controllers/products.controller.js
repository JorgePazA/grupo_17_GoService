
const { productsDB } = require("../data");
const { productsModel } = require("../model")

const path = require ('path')
const fs = require('fs')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const carritoController = {
    
    // Me renderiza los proveedores en las vistas de los servicios
    detailAseo: (req, res) => {
        res.render(path.resolve(__dirname, '..', 'views', 'productDetailAseo'),{proveedores:productsDB});
    },
    detailElectricidad: (req, res) => {
        res.render(path.resolve(__dirname, '..', 'views', 'productDetailElectricidad'),{proveedores:productsDB});
    },
    detailPlomeria: (req, res) => {
        res.render(path.resolve(__dirname, '..', 'views', 'productDetailPlomeria'),{proveedores:productsDB});
    },
    //Me renderiza por ID en vista product-detail
    detail: (req, res) => {
        let id = parseInt(req.params.id)
        let proveedor = productsModel.getProduct(id)
    
        res.render("product-detail", {proveedor, toThousand})
      },
    showCar: (req, res) => {
        let id = parseInt(req.params.id)
        let proveedor = productsModel.getProduct(id)
    
        res.render("productCar", {proveedor, toThousand})
      },
    
      //Me renderiza en Administrar
       list: (req, res) => {
         res.render("administrar", {proveedores: productsDB, toThousand})
       },


      create: (req, res) => {
        res.render("newProduct", {proveedores: productsDB, toThousand})
      },
    
      store: (req, res) => {
        // res.send(req.file)
        productsModel.addProduct(req.body, req.file.filename)
        
        res.redirect("administrar")
      }

};

module.exports = carritoController;