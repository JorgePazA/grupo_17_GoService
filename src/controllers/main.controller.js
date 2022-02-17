const mainController = {

    home: (req, res) =>{
        res.render("index.ejs");
    },
    comoFunciona: (req, res) => {
        res.render("comofunciona.ejs");
    },
    blog: (req, res) => {
        res.render("blog.ejs");
    },
    admin: (req, res) => {
        res.render("administrar.ejs");
    },
    newProduct: (req, res) => {
        res.render("newProduct.ejs");
    },
    editProduct: (req, res) => {
        res.render("editProduct.ejs");
    }

};

module.exports = mainController;