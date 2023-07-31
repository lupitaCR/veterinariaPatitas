const modeloAccesorio = require("../model/modelsAccesorios");

/**
    * @description Funcion para principal para api accesorios
*/
function saludarAccesorio() {
    console.log('Hello in the controlador');
}

/**
    * @description Funcion para consultar todos los accesorios(Admin)
*/
const consultarTodosAccesorios = (req, res) => {
    modeloAccesorio.find({})
    .then((result) => {
        let arreglo = JSON.stringify(result);
        if (arreglo === "[]") {
            return res.status(202).send({
                mensaje:"No hay accesorios registradas",
                status:202
            });
        } else {
            return res.status(200).send({
                mensaje:"hay accesorios registradas",
                status:200,
                result
            })
        }
        
    }).catch((err) => {
        return res.status(404).send({
            mensaje:"Hubo un error al mostrar los accesorios",
            status:400,
            err
        });
    }) 
};

/**
    * @description Funcion para filtrar un accesorio especifico
*/
const consultarAccesorio = (req, res) => {
    let consulta = {};
    consulta[req.params.key] = req.params.value;
    modeloAccesorio.find(consulta)
    .then((result) => {
        let arreglo = JSON.stringify(result);
        if (arreglo === "[]") {
            return res.status(202).send({
                mensaje:"No hay citas agregadas",
                status:202
            });
        } else {
            return res.status(200).send({
                status:200,
                result
            });        
           
        }
        
    }).catch((err) => {
       return res.status(404).send({
           mensaje:"Hubo un error al consultar las citas",
           status:400,
           err
        })
    })
};

/**
    * @description Funcion para agregar un accesorio(Admin)
*/
const agregarAccesorio = (req, res) => {
    let info = req.body;
    const accesorio = new modeloAccesorio(info); 

    accesorio.save().then((result) => {
        console.log(req.body);
        return res.status(200).send({
            mensaje: "Accesorio registrada",
            status: 200,
            result
        })
    }).catch((err)=> {
        return res.status(404).send({
            mensaje: "Hubo un error al registrar el accesorio",
            status: 404,
            err
        })
    });
};

/**
    * @description Funcion para actualizar un accesorio
*/
const editarAccesorio = (req, res) => {
    let consulta = {};
    let nuevo = req.body;
    consulta[req.params.key] = req.params.value;
    modeloAccesorio.findOneAndUpdate(consulta, nuevo, {nuevo:true})
    .then((result) => {
        return res.status(200).send({
            mensaje:"Accesorio actualizada",
            status:"ok",
            result
        });
    }).catch((err) => {
        return res.status(404).send({
            mensaje:"Hubo un error al actulizar el accesorio",
            status:"Error",
            err
        })
    })
};

/**
    * @description Funcion para eliminar una cita(User and Admin)
*/
/* const eliminarAccesorio = (req, res) => {
    let consulta = {};
    consulta[req.params.key] = req.params.value;
    modeloCita.deleteOne(consulta)
    .then((result) => {
        return res.status(200).send({
            mensaje:"Cita cancelada",
            status:"ok",
            result
        });
    }).catch((err) => {
        return res.status(404).send({
            mensaje:"Hubo un error al cancelar la cita",
            status:"Error",
            err
        })
    })
}; */

module.exports = {
    saludarAccesorio,
    agregarAccesorio,
    consultarTodosAccesorios,
};