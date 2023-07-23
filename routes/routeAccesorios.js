const {Router} = require("express");
const router = Router();
const accesorioControler = require("../controler/controlerAccesorios");

router.get("/",accesorioControler.consultarTodosAccesorios)
.post("/",accesorioControler.agregarAccesorio);

module.exports = router;