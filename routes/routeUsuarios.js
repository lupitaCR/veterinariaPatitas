const {Router} = require("express");
const router = Router();
const usuarioControler = require("../controler/controlerUsuarios");
const upload = require("../libs/storage.js");

router.get("/",usuarioControler.mostraTodosUsrs)
.post("/",upload.single('file'),usuarioControler.agregarUsr)
.get("/:key/:value",usuarioControler.obtenerUsr);

module.exports = router;