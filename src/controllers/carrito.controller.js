const path = require ('path')
const fs = require('fs')

let plomeria = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','basePlomeria.json')));
let aseo = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','baseAseo.json')));
let electricidad = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..','data','baseElectricidad.json')));

const carritoController = {
    // Metodo para buscar producto por ID y rendizar el detalle del producto para pasar a carrito
    idProduct: (req, res) =>{
        res.render("productDetail.ejs");
    },

    detailPlomeria1: (req, res) => {
        let idProduct = req.params.id;
        let result = plomeria.find(item=>item.id == idProduct);
        if (result) {
            res.render("./views/plomeriaDetails/:idProduct", {plomeria: result});  
        } else {
             res.redirect("../../");
        }
    }, 
    detailAseo: (req, res) => {
        let idProduct = req.params.id;
        let result = aseo.find(item=>item.id == idProduct);
        if (result) {
            res.render("./views/aseoDetails/:idProduct", {aseo: result});  
        } else {
             res.redirect("../../");
        }
    }, 
    detailElectricidad: (req, res) => {
        let idProduct = req.params.id;
        let result = electricidad.find(item=>item.id == idProduct);
        if (result) {
            res.render("./views/electricidadDetails/:idProduct", {electricidad: result});  
        } else {
             res.redirect("../../");
        }
    },
    carrito: (req, res) => {
        res.render("productCar.ejs");
    },

    // GET de base de Datos
    detailAseo: (req, res) => {
        res.render(path.resolve(__dirname, '..', 'views', 'productDetailAseo'),{aseo});
    },
    detailElectricidad: (req, res) => {
        res.render(path.resolve(__dirname, '..', 'views', 'productDetailElectricidad'),{electricidad});
    },
    detailPlomeria: (req, res) => {
        res.render(path.resolve(__dirname, '..', 'views', 'productDetailPlomeria'),{plomeria});
    },
    detailPlomeria1: (req, res) => {
        res.render(path.resolve(__dirname, '..', 'views', 'plomeriaDetails'),{plomeria});
    },

};

module.exports = carritoController;