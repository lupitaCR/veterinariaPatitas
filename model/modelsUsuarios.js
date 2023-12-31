const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const usersSchema = Schema({
    nombre:{
        type: String,
        required: true
    },
    apellidos:{
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true,
        unique: true
    },
    password:{ 
        type: String,
        required: true 
    },
    telefono:{
        type: String,
        required: true
    },
    direccion:{
        type: String,
        required: true
    },
    imagenUrl:{
        type: String
    },
    esAdmin: {
        type: Boolean,
        required: true
    }
    
})

/* usersSchema.methods.setImgUrl = function setImgUrl (filename) {
    //cambiar la ip de la imagen si se cambia de ip
    if (filename == "null") {
        this.imagenUrl = `http://192.168.0.104:3001/public/imag.png`
    } else {
        this.imagenUrl = `http://192.168.0.104:3001/public/${filename}`
    }
} */

module.exports = mongoose.model("usuarios", usersSchema);