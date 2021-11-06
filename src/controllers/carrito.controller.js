
const carritoController = {

    idProduct: (req, res) =>{
        res.render("productDetail.ejs");
    },
    carrito: (req, res) => {
        res.render("productCar.ejs");
    },
    detailAseo: (req, res) => {
        res.render("productDetailAseo.ejs");
    },
    detailElectricidad: (req, res) => {
        res.render("productDetailElectricidad.ejs");
    },
    detailPlomeria: (req, res) => {
        res.render("productDetailPlomeria.ejs");
    }

};

module.exports = carritoController;