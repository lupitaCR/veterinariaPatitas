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
        required: true 
    },
    contraseña:{ 
        type: String,
        required: true 
    },
    telefono:{
        type: Number,
        required: true
    },
    fecha:{
        type: Date,
        default: Date.now
    },
})

module.exports= model("usuarios", usersSchema, "patitas");