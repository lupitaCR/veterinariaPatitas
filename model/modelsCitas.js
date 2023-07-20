const {Schema, model, default: mongoose} = require("mongoose");

const citasSchema = Schema({
    nombre:{
        type: String,
        required: true
    },
    tipoCita:{
        type: String,
        required: true 
    },
    tipoAnimal:{
        type: String,
        default:"Perro"
    },
    tamaño:{
        type: String,
        default:"Pequeño"
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

module.exports= model("citas", citasSchema, "patitas");