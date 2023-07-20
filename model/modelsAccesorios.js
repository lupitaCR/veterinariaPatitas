const {Schema, model, default: mongoose} = require("mongoose");

const accesoriosSchema = Schema({
    nombreAcc:{
        type: String,
        required: true
    },
    precio:{  
        type: Number,
        required: true
    },
    categoria:{
        type: String,
        default:"Perro"
    },
    cantidad:{
        type: Number,
        required: true
    }
})

module.exports= model("accesorios", accesoriosSchema, "patitas");