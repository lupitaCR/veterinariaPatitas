const {Router} = require("express");
const router = Router();
const usuarioControler = require("../controler/controlerUsuarios");

router.get("/",usuarioControler.mostraTodosUsrs)
.post("/",usuarioControler.agregarUsr)
.get("/:key/:value",usuarioControler.obtenerUsr);

module.exports = router;