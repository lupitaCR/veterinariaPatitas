const mongoose = require('mongoose')
const Schema = mongoose.Schema;

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

module.exports= mongoose.model("accesorios", accesoriosSchema);