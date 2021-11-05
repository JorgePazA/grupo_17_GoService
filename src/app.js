const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const rutaMain = require("./routers/main.router");
const rutaCarrito = require("./routers/carrito.router");
const rutaUsers = require("./routers/usuarios.router");

app.set('views', path.resolve(__dirname, './views'));
app.use(express.static(path.join(__dirname, "../public")));
app.set('view engine', 'ejs');

app.use('/', rutaMain);
app.use('/', rutaCarrito);
app.use('/', rutaUsers);

app.listen(port, () => console.log(`server is listening on ${port}`));



// app.get("/", (req, res) => {
//   let html = path.join(__dirname, "./views/index.ejs");
//   res.sendFile(html);
// });

// app.get("/productCar.html", (req, res) => {
//   res.sendFile(path.resolve(__dirname,"./views/productCar.ejs"));
// });

// app.get("/login.html", (req, res) => {
//   res.sendFile(path.resolve(__dirname,"./views/login.ejs"));
// });

// app.get("/productDetail.html", (req, res) => {
//   res.sendFile(path.resolve(__dirname,"./views/productDetail.ejs"));
// });

// app.get("/register.html", (req, res) => {
//   res.sendFile(path.resolve(__dirname,"./views/register.ejs"));
// });

