console.log("Hola mundo!")

//Variables en Javascript
//ES5
//var está deprecado
var a = "A"
var b = "B"
var b = "Hola"
b = "Hola, como estás?"
console.log(b)

//ES6
let x = 10
x = 5
x = 6
//se puede declarar otros valores

const y = 10
//const no puede reasignar su valor
// y = 2

//operaciones aritméticas
console.log(x + y)
console.log(x - y)
console.log(x / y)
console.log(x * y)

//Funciones

//Tradicional
function saludo () {
    const saludo = "Bienvenidos!"
    console.log(saludo)
}

saludo()

//Funcion tradicional asignada a una variable
const saludar = function darSaludo() {
    const saludo = "Funcion dar saludo acá!"
    console.log(saludo)
    return saludo
}

console.log(saludar())
// saludar()

//Funcion flecha o arrow function
const val1 = 5
const val2 = 2

const data = (a, b) => {console.log("Suma con parámetros: ", a + b)}

data(val1, val2)

//Scope -> ámbito de alcance
let xyz = "Variable XYZ"

function imprimirValor(a) {
    let xyz = "Variable XYZ dentro de la funcion"
    console.log("XYZ dentro de la f: ", xyz, a)
}

imprimirValor(xyz)

console.log("XYZ: ", xyz)

//Tipos de datos

const test = {}
console.log("TEST: ", typeof(test))

//Objeto -> clave-valor
const testobj = {
    1: "Melisa",
    edad: 27,
    color: "Naranja",
    email: null
}

console.log("TEST OBJ: ", (testobj))

const testarr = [1, 2, 3, 4, 5, null, ["Hola", "Como va?"], undefined, true, false, "Hello"]

console.log("TEST ARR: ", (testarr))

//String
//Números
//Boolean
//Objetos
//Arrays
//Undefined
//Null