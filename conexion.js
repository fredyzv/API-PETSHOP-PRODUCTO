const mysql = require("mysql");
var mysqlConexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "pet"
    })

mysqlConexion.connect(
    (err) =>{
        if(!err){
            console.log("Estoy conectado a la base de datos MySql");
        }
        else{
            console.log("No estoy conectado. Error");
            console.log(err);
        }
    })

module.exports = mysqlConexion;