
const carritoController = {

    idProduct: (req, res) =>{
        res.render("productDetail.ejs");
    },
    carrito: (req, res) => {
        res.render("productCar.ejs");
    }

};

module.exports = carritoController;