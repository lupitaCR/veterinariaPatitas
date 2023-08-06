const modeloUsuario = require("../model/modelsUsuarios");

/**
    * @description Funcion inicial para corroborar funcionamiento correcto
*/
function saludar() {
    console.log('Hello in the controlador');
}

/**
    * @description Funcion para agregar un usuario(REGISTRO)
*/
const agregarUsr = (req, res) => {
    console.log('funcion agregarUsr');
    let info = req.body;
    const usuario = new modeloUsuario(info);
    usuario.save().then((result) => {
        console.log(req.body);
        return res.status(200).send({
            mensaje: "Usuario registrado",
            status: 200,
            result //toda la info de ese guardado
        })
    }).catch((err)=> {
        if (err.code == "11000") {
            return res.status(400).send({
                mensaje: "El usuario ya existe",
                status: 400,
                err
            })
        } else {
            return res.status(404).send({
                mensaje: "Error al registrar usuario",
                status: 404,
                err
            })
        }
        
    });

};

/**
    * @description Funcion para filtrar un usuario(LOGIN)
*/
const obtenerUsr = (req, res) => {
    let consulta = {};
    consulta[req.params.key] = req.params.value;
    modeloUsuario.find(consulta).then((result) => {
        let arreglo = JSON.stringify(result);
        if (arreglo === "[]") {
            return res.status(202).send({
                mensaje:"No hay registro en la base de datos",
                status: 202,
                result
            });
        } else {
            return res.status(200).send({
                mensaje:"Se obtuvo el usuario",
                status:200,
                result
            });
        }      
       
    }).catch((err) => {
       return res.status(404).send({
           mensaje:"Hubo un error al obtener el usuario",
           status:404,
           err
        })
    })
};

/**
    * @description Funcion para filtrar todos los usuarios
*/
const mostraTodosUsrs = (req, res) => {
    modeloUsuario.find({})
    .then((result) => {
        let arreglo = JSON.stringify(result);
        if (arreglo === "[]") {
            return res.status(202).send({
                mensaje:"No hay usuarios registrados",
                status:202
            });
        } else {
            return res.status(200).send({
                mensaje:"hay usuarios registrados",
                status:200,
                result
            })
        }
        
        
    }).catch((err) => {
        return res.status(404).send({
            mensaje:"Error al mostrar los usuarios",
            status:404,
            err
        });
    })
};

/*
const eliminarUsr = (req, res) => {
    let consulta = {};
    consulta[req.params.key] = req.params.value;
    modeloUsuario.deleteOne(consulta)
    .then((result) => {
        return res.status(200).send({
            mensaje:"Registro eliminado",
            status:"ok",
            result
        });
    }).catch((err) => {
        return res.status(404).send({
            status:"Error",
            err
        })
    })
};

const editarUsuario = (req, res) =>{
    let consulta = {};
    let nuevo = req.body;
    consulta[req.params.key] = req.params.value;
    console.log(consulta)
    console.log(nuevo);
   modeloUsuario.findOneAndUpdate(consulta, nuevo, {nuevo:true})
    .then((result) => {
        return res.status(200).send({
            mensaje:"Registro de usuario actualizado",
            status:"ok",
            result
        });
    }).catch((err) => {
        return res.status(404).send({
             mensaje:"Ubo un error al actualizar usuario actualizado",
            status:"Error",
            err
        })
    })
}; */

module.exports = {
    saludar,
    agregarUsr,
    obtenerUsr,
    mostraTodosUsrs
}