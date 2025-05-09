//La capa de servicios tiene la lógica del negocio
import studentModel from "../models/student.model.js"

const getStudents = async () => {
    const data = await studentModel.getStudents()
    return data
}

const postStudents = async (student) => {
    const data = await studentModel.postStudents(student)
    return data
}

export default {
    getStudents,
    postStudents
}