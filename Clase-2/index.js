let xyz = undefined
console.log("XYZ: ", typeof(xyz))

//Operadores de comparación
// console.log(10 == "10") //igualdad
// console.log(10 === "10") //igualdad estricta
// console.log(10 != 5)
// console.log(10 > 5)
// console.log(10 < 5)

//Operadores lógicos
let condition = (100 > 80)
condition = (100 < 80)
const esMayor = (10 > 5)
const esMenor = (10 < 5)

console.log(esMayor || esMenor) //OR
console.log(esMayor && esMenor) //AND
console.log(!esMenor) //NOT

//Estructuras condicionales
//IF
if (condition) {
    console.log("Se la cumple la condicion!")
}

//IF
if (condition) {
    console.log("Se cumple la segunda condicion!")
} else {
    console.log("No se cumple.")
}

//IFELSEIF
if (condition) {
    console.log("Se cumple la tercera condicion!")    
} else if(condition === "") {
    console.log("La condicion es false.")
} else {
    console.log("Ha ocurrido un error en el servidor.")
}

//SWITCH
const key = "rojo"
//break ===> return
switch (key) {
    case "verde":
        console.log("Es verde!")
        break;

    case "amarillo":
        console.log("Es amarillo!")
        break;

    case "rojo":
        console.log("Es rojo!")
        break;

    case "violeta":
        console.log("Es violeta!")
        break;

    case "gris":
        console.log("Es gris!")
        break;

    case "azul":
        console.log("Es azul!")
        break;

    default:
        console.log("No matchea con ningun color.")
        break;
}

//Operador ternario -> (condicion) ? "algo aca" : "algo acá"
const edad = "18"
const compararEdad = (edad === 18) ? "Es mayor de edad." : "Es menor de edad."
console.log("Comparación: ", compararEdad)

//Nullish coalescing
//Operador de Coalescencia nula
//Evalua valores nulos o undefined
const saludo1 = null ?? "Hola a todos!"
const saludo2 = "Hola mundo!" ?? "Hola a todos!"
console.log("Saludo 1: ", saludo1)
console.log("Saludo 2: ", saludo2)

//Template string -> `` -> ALT + 96
const templStng1 = 10
const templStng2 = 100
console.log("Comillas dobles ", templStng1 + " " + templStng2) //comillas dobles
console.log('Comillas simples ', templStng2) //comillas simples
console.log(`Las comillas invertidas me permiten ${templStng1} unificar el mensaje y el valor de la variable. Ejemplo: ${templStng1} y ${templStng2}`) //comillas invertidas

//setInterval
setInterval(() => {
    //Esta lógica se repite indefinidamente
    console.log("setInterval...")
}, 3000)

//setTimeout
setTimeout(() => {
    //No se repite, pero aplica un delay
    console.log("setTimeout...")
}, 5000)