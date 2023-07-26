const express = require('express');// instanciar a express
const conexion = require("./conexion/conexion.js");//al importar variable usamos llaves
const app = express();// se ejecutara express en una varible
const routerUser = require("./routes/routeUsuarios.js");
const routerCitas = require("./routes/routeCitas.js");
const routerAccesorios = require("./routes/routeAccesorios.js");
conexion();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/public', express.static(`${__dirname}/storage`));
app.use("/api/user", routerUser);
app.use("/api/citas", routerCitas);
app.use("/api/accesorios", routerAccesorios);

app.listen(3001,() => {
 console.log('el servidor esta corriendo en el puerto 3001');
})

