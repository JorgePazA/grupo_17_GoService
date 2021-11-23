const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 4000;
const methodOverride = require('method-override');
const rutaMain = require("./src/routers/main.routes");
const rutaCarrito = require("./src/routers/carrito.routes");
const rutaUsers = require("./src/routers/usuarios.routes");
const rutaDetail = require("./src/routers/detail.routes")

app.set('views', path.resolve(__dirname, './src/views'));
app.use(express.static(path.join(__dirname, "./public")));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use(rutaMain);
app.use(rutaCarrito);
app.use(rutaUsers);
app.use(rutaDetail);

app.listen(port, () => console.log(`server is listening on ${port}`));

