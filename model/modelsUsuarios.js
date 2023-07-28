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
        type: Number,
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

usersSchema.methods.setImgUrl = function setImgUrl (filename) {
    this.imagenUrl = `http://127.0.0.1:3001/public/${filename}`
}

module.exports = mongoose.model("usuarios", usersSchema);