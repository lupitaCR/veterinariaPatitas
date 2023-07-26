const modeloUsuario = require("../model/modelsUsuarios");

/* 
 NOTA: FALTA VALIDAR IMAGEN DE PERFIL VER VIDEOS DE WHATSAPP
*/

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
    //console.log(info);
    const usuario = new modeloUsuario(info);
    console.log(req.file)
    var nombre =req.file.originalname
    console.log(nombre)
    if (req.file) {
        //const {filename} = req.file;
        console.log(nombre)
        modeloUsuario.setImgUrl
        usuario.setImgUrl(nombre)
    }
    usuario.save().then((result) => {
        console.log(req.body);
        return res.status(200).send({
            mensaje: "Usuario registrado",
            status: "ok",
            result //toda la info de ese guardado
        })
    }).catch((err)=> {
        if (err.code == "11000") {
            return res.status(400).send({
                mensaje: "El usuario ya existe",
                status: "Error",
                err
            })
        } else {
            return res.status(404).send({
                mensaje: "Error al registrar usuario",
                status: "Error",
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
    modeloUsuario.find(consulta)
    .then((result) => {
        if (!result) {
            return res.status(202).send({
                mensaje:"No hay registro en la base de datos"
            });
        }
        
        return res.status(200).send({
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

/**
    * @description Funcion para filtrar todos los usuarios
*/
const mostraTodosUsrs = (req, res) => {
    modeloUsuario.find({})
    .then((result) => {
        if (!result) {
            return res.status(202).send({
                mensaje:"No hay usuarios registrados",
                status:"ok"
            });
        } 
        return res.status(200).send({
            result
        })
        
    }).catch((err) => {
        return res.status(404).send({
            mensaje:"Error al mostrar los usuarios",
            status:"Error",
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