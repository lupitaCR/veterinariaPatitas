const {Schema, model, default: mongoose} = require("mongoose");

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
    contraseña:{ 
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

module.exports= model("usuarios", usersSchema, "patitas");