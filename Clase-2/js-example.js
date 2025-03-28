console.log("JS basics...")
//------------------//
//----Javascript----//
//------------------//

//Variables
console.log("")
console.log("--------------Variables--------------")
var z = 10
z = 100
let x = 10
x = 100
const y = 100
//y = 1000 -> no se puede reasignar el valor de una constante
console.log("X: ", x)
console.log("Y: ", y)

//Operadores de asignación
let xyz = 5
xyz += 2 // Equivale a xyz = xyz + 2
console.log("Asignación: ", xyz)

//Operadores de incremento y decremento
let num = 5
console.log("Num: ", ++num)
console.log("Num: ", num--)
console.log("Num: ",num--)
console.log("Num: ",num)

//Arrays
console.log("")
console.log("--------------Arrays--------------")
const arr = ["amarillo", "naranja", "violeta", "verde", "blanco"]
console.log("Mi array en JS: ", arr)
console.log("Tipo de dato del array: ", typeof(arr))
console.log("Primer elemento del array: ", arr[0])
console.log("Elemento en la posición 3 del array: ", arr[3])
console.log("Longitud del array: ", arr.length)
console.log("Último elemento del array si no conozco la longitud: ", arr[arr.length - 1])
arr.push("gris")
console.log("Array con nuevos elementos: ", arr)
const newArr = ["blanco", "negro"]
const concatArr = arr.concat(newArr)
console.log("Array concatenado: ", concatArr)
concatArr.pop()
console.log("Array concatenado sin el último elemento: ", concatArr)
concatArr.shift()
console.log("Array concatenado sin el primer elemento: ", concatArr)
const copyArr = arr.slice()
console.log("Copia de arr: ", copyArr)
//Solo tipos primitivos y objetos
console.log("Typeof de arr: ", typeof arr)
console.log("IsArrary() de arr: ", Array.isArray(arr))
console.log("InstanceOF de arr: ", arr instanceof Array)

//Objetos
console.log("")
console.log("--------------Objects--------------")
let objetos = {silla: "azul", mate: "de madera", teclado: "inalámbrico", cuaderno: "tapa dura"}
objetos.lapicera = "de tinta negra"
objetos["mouse"] = "con cable"
console.log("Objetos: ", objetos)
objetos["mouse"] = "inalámbrico"
console.log("Objetos con modificaciones: ", objetos)
console.log("Objetos Keys: ", Object.keys(objetos))
console.log("Objetos Values: ", Object.values(objetos))
console.log("Existe silla en objetos? ", objetos.hasOwnProperty("silla"))
console.log("Existe mesa en objetos? ", objetos.hasOwnProperty("mesa"))

//Lista de objetos
const listaDeObj = [
    {estudiante: "Pablo Perez", email: "pablop@gmail.com", nota: 10},
    {estudiante: "Mariana Ojeda", email: "pablop@gmail.com", nota: 10},
    {estudiante: "Gonzalo Perez", email: "pablop@gmail.com", nota: 10}
]
console.log("listaDeObj: ", listaDeObj)

const noEsLista = {
    color: "Lila"
} + {
    color: "Amarillo"
}

console.log("noEsLista: ", noEsLista)

//Desestructuración de Objetos: método que permite extraer valores de arrays o propiedades de objetos en otras variables
console.log("--------------Desestructuring Objects--------------")
let a, b
[a, b] = ["sal", "azúcar"]
let c
[c] = ["pimienta"]
console.log("A: ", a)
console.log("B: ", b)
console.log("C: ", c)

const {teclado, ...nuevosObjetos} = objetos
console.log("nuevosObjetos: ", nuevosObjetos)

const [d, e, f, ...g] = [1, 2, 3, 4, 5, 6, 7]
console.log("D: ", d)
console.log("E: ", e)
console.log("F: ", f)
console.log("G: ", g)

const {h, i, ...j} = {h: "hola", i: "isla", j: "jarra", k: "kiwi"}
console.log("H: ", h)
console.log("I: ", i)
console.log("J: ", j)

const mascotas = ["perro", "gato"]
const animales = ["jabalí", "gacela", "elefante", "mapache"]
const animalesMascotas = [...mascotas, ...animales]
console.log("Animales y mascotas: ", animalesMascotas)
const unificarArrays = [mascotas, animales]
console.log("Unificación de arrays: ", unificarArrays)
const otrosEjemplosConArrays = [...mascotas, animales]
console.log("otros ejemplos con arrays: ", otrosEjemplosConArrays)

const tiposDeCambio = {USD: "Dolar Estadounidense", GBP: "Libra Esterlina", ARS: "Pesos Argentinos"}
const masTiposDeCambio = {JPY: "Yen Japonés", BRL: "Real Brasileño"}
const todosLosTiposDeCambio = {...tiposDeCambio, ...masTiposDeCambio}
console.log("Todos los tipos de cambio: ", todosLosTiposDeCambio)
const otrosEjemplosConObjetos = {...tiposDeCambio, masTiposDeCambio}
console.log("otros ejemplos con objetos: ", otrosEjemplosConObjetos)

const saludo = ["Hola", "como", "estas"]
const [primeraParte, segundaParte] = saludo
console.log("Saludo: ", primeraParte, segundaParte)