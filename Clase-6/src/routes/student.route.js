import express from "express"
import studentController from "../controllers/student.controller.js"

const router = express.Router()

//definir las rutas de mi entidad "students"
//router + verbo + "/ruta" + controlador
router.get("/students", studentController.getStudents)
router.post("/students", studentController.postStudents)

export default router