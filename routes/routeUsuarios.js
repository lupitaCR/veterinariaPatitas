const {Router} = require("express");
const router = Router();
const usuarioControler = require("../controler/controlerUsuarios");
const upload = require("../libs/storage");

router.get("/",usuarioControler.mostraTodosUsrs)
.post("/", upload.single('image'), usuarioControler.agregarUsr)
.get("/:key/:value",usuarioControler.obtenerUsr);

module.exports = router;