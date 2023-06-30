const {Router} = require("express");
const router = Router();
const AlumnoController = require("../controller/alumno.controller");

router.get('/media', AlumnoController.getAlumnoMedia);
router.get('/apuntadas', AlumnoController.getAsignaturasApuntadas);
router.get('/apuntadas/alumnos', AlumnoController.getAlumnosApuntadas);
router.get('/impartidas', AlumnoController.getAsignaturasImpartidas);
router.get('/impartidas/profesores', AlumnoController.getProfesoresYAsignaturasImpartidas);

module.exports = router;   