//El controlador se encarga de recibir la solicitud del usuario (req) y enviar una respuesta (res)
import studentService from "../services/student.service.js"

const getStudents = async (req, res) => {
    const data = await studentService.getStudents()
    res.send(data)
}

const postStudents = async (req, res) => {
    const student = req.body
    console.log("Student: ", Object.keys(student))
    if(Object.keys(student).includes("nombre") && Object.keys(student).includes("nota")){
        const data = await studentService.postStudents(student)
        res.send(data)
    } else{
        res.send("No se proporcionaron los datos correctos.")
    }

}

export default {
    getStudents,
    postStudents
}