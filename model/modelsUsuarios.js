const {Schema, model, default: mongoose, models} = require("mongoose");

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
    this.imagenUrl = `localhost:27017/public/${filename}`;
}

module.exports = mongoose.model("patitas", usersSchema, "usuarios");