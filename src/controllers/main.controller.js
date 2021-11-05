// const path = require ('path');

const mainController = {

    home: (req, res) =>{
        res.render("index.ejs");
    },
    comoFunciona: (req, res) => {
        res.render("comofunciona.ejs");
    },
    blog: (req, res) => {
        res.render("blog.ejs");
    }

};

module.exports = mainController;