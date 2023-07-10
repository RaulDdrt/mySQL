const {Router} = require ("express");
const router = Router();
const alumnosCtrl = require("../controller/alumnos.controller")

router.get("/alumnos", alumnosCtrl.getAlumnos)
router.post("/alumnos" , alumnosCtrl.postAlumnos)
router.put("/alumnos" , alumnosCtrl.editarAlumno)
router.delete("/alumnos" ,  alumnosCtrl.eliminarAlumno)


module.exports = router