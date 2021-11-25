const express = require("express");
const path = require("path");
const app = express();

//* Se declara puerto para uso en Heroku
const port = process.env.PORT || 3000;

//*Se define motro de templates
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

//*Se define la carpeta pública
app.use(express.static(path.join(__dirname, "../public")));

//*Configurar el entorno para que éste puede recibir datos por POST
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//* Configurar la librería requerida para usar los métodos PUT y DELETE
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

//*Requerir y definir las rutas
const rutaMain = require("./routers/main.routes");
const rutaCarrito = require("./routers/products.routes");
const rutaUsers = require("./routers/usuarios.routes");




app.use(rutaMain);
app.use(rutaCarrito);
app.use(rutaUsers);

app.listen(port, () => console.log(`server is listening on ${port}`));