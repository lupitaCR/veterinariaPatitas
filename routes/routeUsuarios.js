const {Router} = require("express");
const router = Router();
const usuarioControler = require("../controler/controlerUsuarios");
const upload = require("../libs/storage");

router.get("/",usuarioControler.mostraTodosUsrs)
.post("/", usuarioControler.agregarUsr)
.get("/:key/:value",usuarioControler.obtenerUsr);

/* .post("/", upload.single('imagenUrl'), usuarioControler.agregarUsr) */
module.exports = router;