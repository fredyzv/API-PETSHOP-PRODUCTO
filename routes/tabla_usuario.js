const express = require('express');
const Router = express.Router();
const mysqlConexion = require("../conexion");

Router.get("/", (req, res) =>{
    mysqlConexion.query("SELECT * FROM usuario",(err, rows, fields)=>{
        if(!err)
        {
            res.send(rows);
        }
        else{
            console.log(err);
        }

    })
}
)
module.exports = Router;