//El modelo solo se encarga de procesar / recibir y enviar datos relacionados directamente con la base de datos o la persistencia

const students = [
    {id: 1, nombre: "Ana Perez", email: "anaperez@gmail.com", nota: 9},
    {id: 2, nombre: "Juan Perez", email: "juanperez@gmail.com", nota: 8},
    {id: 3, nombre: "Mariana Ojeda", email: "marianaojeda@gmail.com", nota: 7},
    {id: 4, nombre: "Gastón Hernández", email: "gastonhernandez@gmail.com", nota: 6}
]

//siempre con funcionalidades asíncronas
const getStudents = async () => {
    return await students
}

const postStudents = async (student) => {
    students.push(student)
    return student
}

// async function getStudents() {
//     return await students
// }

export default {
    getStudents,
    postStudents
}