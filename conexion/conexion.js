const mongoose = require("mongoose");

const conexion = async () => {

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/patitas")
        console.log("La conexión se realizo de manera correcta")
    } catch (e) {
        console.log(`No se pudo conectar a la base de datos ${e}`)
    }

}

module.exports = conexion;