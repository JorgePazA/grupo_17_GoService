const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "./public")));

app.get("/", (req, res) => {
  let html = path.join(__dirname, "./views/index.html");
  res.sendFile(html);
});
app.get("/productCar.html", (req, res) => {
  res.sendFile(path.resolve(__dirname,"./views/productCar.html"));
});

app.listen(3000, () => {
  console.log("Servidor Corriendo");
});