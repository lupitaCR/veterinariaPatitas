const {Router} = require("express");
const router = Router();
const citasControler = require("../controler/controlerCitas");

router.get("/",citasControler.consultarCitas)
.get("/:key/:value",citasControler.consultarCitaPorUsr)
.post("/",citasControler.agregarCita)
.put("/:key/:value",citasControler.editarCita)
.delete("/:key/:value",citasControler.eliminarCita);

module.exports = router;