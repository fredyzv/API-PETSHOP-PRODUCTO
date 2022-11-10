const { application } = require('express');
const express = require('express');
const Router = express.Router();
const mysqlConexion = require("../conexion");

Router.get("/", (req, res) =>{
    mysqlConexion.query("SELECT * FROM producto",(err, rows, fields)=>{
        if(!err)
        {
            res.send(rows);
        }
        else{
            console.log(err);
        }

    })
})

Router.get("/:cod_prod", (req, res) =>{
    mysqlConexion.query("SELECT * FROM producto where cod_prod = ?",[req.params.cod_prod] ,(err, rows, fields)=>{
        if(!err)
        {
            res.send(rows);
        }
        else{
            console.log(err);
        }

    })
})


module.exports = Router;