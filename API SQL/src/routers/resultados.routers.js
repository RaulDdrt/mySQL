const {Router} = require ("express");
const router = Router();
const resultadosCtrl = require("../controller/resultados.controller")

router.get("/media" , resultadosCtrl.getMedia)
router.get("/apuntadas" , resultadosCtrl.getAsignaturas)
router.get("/impartidas" , resultadosCtrl.getProfes)

module.exports = router