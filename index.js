const express = require('express');// instanciar a express
const conexion = require("./conexion/conexion.js");//al importar variable usamos llaves
const app = express();// se ejecutara express en una varible
const routerUser = require("./routes/routeUsuarios.js");

conexion();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/user", routerUser);
//app.use("/api/citas", routerP);
//app.use("/api/accesorios", routerP);

app.listen(3000,() => {
 console.log('el servidor esta corriendo en el puerto 3000');
})

