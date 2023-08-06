const modeloCita = require("../model/modelsCitas");

/**
    * @description Funcion para principal para api citas
*/
function saludarCita() {
    console.log('Hello in the controlador');
}

/**
    * @description Funcion para consultar citas(Admin)
*/
const consultarCitas = (req, res) => {
    modeloCita.find({})
    .then((result) => {
        let arreglo = JSON.stringify(result);
        if (arreglo === "[]") {
            return res.status(202).send({
                mensaje:"No hay citas registradas",
                status:202
            });
        } else {
            return res.status(200).send({
                mensaje:"citas registradas",
                status:200,
                result
            })
        }
        
    }).catch((err) => {
        return res.status(404).send({
            mensaje:"Hubo un error al mostrar las citas registradas",
            status:404,
            err
        });
    }) 
};

/**
    * @description Funcion para filtrar citas por usuario(User)
*/
const consultarCitaPorUsr = (req, res) => {
    let consulta = {};
    consulta[req.params.key] = req.params.value;
    modeloCita.find(consulta)
    .then((result) => {
        let arreglo = JSON.stringify(result);
        if (arreglo === "[]") {
            return res.status(202).send({
                mensaje:"No hay citas agregadas",
                status: 202
            });
        } else {
            return res.status(200).send({
                mensaje:"hay citas agregadas",
                status: 200,
                result
            }); 
        }       
       
    }).catch((err) => {
       return res.status(404).send({
           mensaje:"Hubo un error al consultar las citas",
           status:404,
           err
        })
    })
};

/**
    * @description Funcion para agregar una cita(Admin and User)
*/
const agregarCita = (req,res) => {
    let info = req.body;
    const cita = new modeloCita(info); 

    cita.save().then((result) => {
        console.log(req.body);
        return res.status(200).send({
            mensaje: "Cita registrada",
            status: 200,
            result
        })
    }).catch((err)=> {
        return res.status(404).send({
            mensaje: "Hubo un error al registrar la cita",
            status: 404,
            err
        })
    });
};

/**
    * @description Funcion para actualizar una cita(User)
*/
const editarCita = (req, res) => {
    let consulta = {};
    let nuevo = req.body;
    consulta[req.params.key] = req.params.value;
    modeloCita.findOneAndUpdate(consulta, nuevo, {nuevo:true})
    .then((result) => {
        return res.status(200).send({
            mensaje:"Cita actualizada",
            status: 200,
            result
        });
    }).catch((err) => {
        return res.status(404).send({
            mensaje:"Hubo un error al actulizar la cita",
            status:404,
            err
        })
    })
};

/**
    * @description Funcion para eliminar una cita(User and Admin)
*/
const eliminarCita = (req, res) => {
    let consulta = {};
    consulta[req.params.key] = req.params.value;
    modeloCita.deleteOne(consulta)
    .then((result) => {
        return res.status(200).send({
            mensaje:"Cita cancelada",
            status:200,
            result
        });
    }).catch((err) => {
        return res.status(404).send({
            mensaje:"Hubo un error al cancelar la cita",
            status:404,
            err
        })
    })
};

const agregarC = (req, res) => {
    console.log('funcion agregarCita');
    let info = req.body;
    const usuario = new modeloCita(info);
    console.log(info)
    usuario.save().then((result) => {
        console.log(result)
        return res.status(200).send({
            mensaje: "Usuario registrado",
            status: 200,
            result //toda la info de ese guardado
        })
    }).catch((err)=> {
        console.log(err)
            return res.status(404).send({
                mensaje: "Error al registrar usuario",
                status: 404,
                err
            })        
    });

};

module.exports = {
    saludarCita,
    agregarC,
    consultarCitas,
    consultarCitaPorUsr,
    editarCita,
    eliminarCita
};