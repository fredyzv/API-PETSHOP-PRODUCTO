const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const mysqlConexion = require("./conexion");
const producto = require("./routes/tabla_producto");
const usuario = require("./routes/tabla_usuario");

var app = express();
app.use(bodyParser.json());
app.use("/api/productos", producto);
app.use("/api/usuarios", usuario);


app.listen(8080);