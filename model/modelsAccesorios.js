const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const accesoriosSchema = Schema({
    nombreAcc:{
        type: String,
        required: true
    },
    precio:{  
        type: String,
        required: true
    },
    categoria:{
        type: String,
        default:"Perro"
    },
    cantidad:{
        type: String,
        required: true
    }
})

module.exports= mongoose.model("accesorios", accesoriosSchema);