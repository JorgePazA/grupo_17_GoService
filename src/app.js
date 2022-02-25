require('dotenv').config()
const express = require("express");
const session = require("express-session");
const path = require("path");
const app = express();

//* Llámamos los middlewares de aplicación
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware')




//* Se declara puerto para uso en Heroku
const port = process.env.PORT;

//*Se define motro de templates
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

//*Se define la carpeta pública
app.use(express.static(path.join(__dirname, "../public")));


app.use(session({
    secret: "Shhhh, It's a secret",
    resave: false,
    saveUninitialized: false,
}));

//* Usamos los middlewares de aplicación
app.use(userLoggedMiddleware)

//*Configurar el entorno para que éste puede recibir datos por POST
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//* Configurar la librería requerida para usar los métodos PUT y DELETE
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

//*Requerir y definir las rutas
const rutaMain = require("./routers/main.routes");
const rutaCarrito = require("./routers/goger.routes");
const rutaUsers = require("./routers/user.routes");
const apiRoutes = require("./routers/api.routes");




app.use(rutaMain);
app.use(rutaCarrito);
app.use(rutaUsers);
app.use(apiRoutes);

app.listen(port, () => console.log(`server is listening on ${port}`));