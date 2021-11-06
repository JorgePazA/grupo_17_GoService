const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const rutaMain = require("./src/routers/main.router");
const rutaCarrito = require("./src/routers/carrito.router");
const rutaUsers = require("./src/routers/usuarios.router");

app.set('views', path.resolve(__dirname, './src/views'));
app.use(express.static(path.join(__dirname, "./public")));
app.set('view engine', 'ejs');

app.use('/', rutaMain);
app.use('/', rutaCarrito);
app.use('/', rutaUsers);

app.listen(port, () => console.log(`server is listening on ${port}`));

