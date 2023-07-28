const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const citasSchema = Schema({
    usuario:{
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
    tamano:{
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
    codigoCita:{
        type: String,
        unique: true,
        required: true
    }
})

module.exports = mongoose.model("citas", citasSchema);