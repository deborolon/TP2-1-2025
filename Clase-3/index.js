//Formas de importar módulos en Node
//common js
// const fs = require("fs")
//module
import fs from "fs"

console.log("//----------FS SINCRÓNICO----------//")
function fsSync() {
    const data = fs.readFileSync("doc.txt", "utf-8")
    console.log("Data en fs sincrónico: ", data)
    const writeData = fs.writeFileSync("doc.txt", "Bienvenidos a TP2!")
    const dataUpdate = fs.readFileSync("doc.txt", "utf-8")
    console.log("Data actualizada: ", dataUpdate)
    console.log("HOLA!!!")
}

fsSync()
console.log("//----------FIN FS SINCRÓNICO----------//")

// CALLBACK: es una función que se pasa como parámetro de otra función
console.log("//----------FS CALLBACK----------//")

function callback(a, b, cb) {
    return cb(a, b)
}

function suma(x, y) {
    return x + y
}

console.log("Callback: ", callback(10, 5, suma))

// CALLBACK HELL NO!!!
function fsCallback() {
    //tienen que respetar el orden los parámetros, no necesariamente el nombre
    fs.readFile("doc.txt", "utf-8", (err, data) => {
        if(data) console.log("Data en fs callback: ", data)
        if(err) console.log("Error en la operación de callback con FS.", err)
            fs.writeFile("doc.txt", "Sobreescribiendo...", (err, data) => {
                console.log(data)
                fs.readFile("doc.txt", "utf-8", (err, data) => {
                    console.log("Data actualizada en fs callback: ", data)

                    fs.readFile("doc.txt", "utf-8", (err, data) => {
                        console.log("Data actualizada en fs callback: ", data)

                        fs.readFile("doc.txt", "utf-8", (err, data) => {
                            console.log("Data actualizada en fs callback: ", data)

                            fs.readFile("doc.txt", "utf-8", (err, data) => {
                                console.log("Data actualizada en fs callback: ", data)

                                fs.readFile("doc.txt", "utf-8", (err, data) => {
                                    console.log("Data actualizada en fs callback: ", data)
                                })
                            })
                        })
                    })
                })
            })
    })
}

fsCallback()
console.log("//----------FIN FS callback----------//")

//Promesas
console.log("//----------FS con promesas----------//")
function promisesJS(data) {
    return new Promise((resolve, reject) => {
        if(data){
            console.log("La promesa se ejecutó correctamente!")
        } else if(reject){
            console.log("Error. La promesa se reachazó.")
        }
        //if en línea:
        // if(condition) //...
    })    
}

promisesJS(false)

//Petición a una API
//fetch -> es una función de js que permite realizar consultas a servicios externos
const fetchApi = fetch("htps://rickandmortyapi.com/api/character")
                    //res o result -> en el caso positivo
                    .then(res => console.log(res))
                    .catch(err => console.log("Error en fetch! ", err))
                    .finally(() => console.log("Finally..."))
                    // .then((res) => {
                        //más lógica acá...
                        // res.json()
                    // })

console.log("fetch api Rick & Morty: ", fetchApi)

function fsPromises() {
    fs.promises.readFile("doc.txt", "utf-8")
        .then((res) => console.log(res))
        .then(() => {
            fs.promises.writeFile("doc.txt", "Función con Promesas y FS")
        })
        .then((res) => console.log("RES: ", res))
        .then(() => {
            console.log(fs.promises.readFile("doc.txt", "utf-8"))
        })
        .catch((err) => console.log("Error en el catch! ", err))
}

fsPromises()
console.log("//----------FIN FS con promesas----------//")

//Async/Await
console.log("//----------FS con Async / Await----------//")

async function fsAsyncAwait() {
    // const readData = await fs.promises.readFile("doc.txt", "utf-8")
    // console.log("readData: ", readData)
    // const writeData = await fs.promises.writeFile("doc.txt", "Nuevo texto con async await")
    // console.log(writeData)
    // const readDataNew = fs.promises.readFile("doc.txt", "utf-8")
    // console.log("readDataNew: ", readDataNew)
    // console.log("readData: ", readData)

    try {
        let readData = await fs.promises.readFile("doc.txt", "utf-8")
        console.log("readData: ", readData)
        const writeData = await fs.promises.writeFile("doc.txt", "Nuevo texto con async await")
        console.log(writeData)
        readData =  await fs.promises.readFile("doc.txt", "utf-8")
        console.log("readData: ", readData)
    } catch (error) {
        console.log("Error en el catch de async await: ", error)
    }
}

//arrow function
// async (params) => {
// }

fsAsyncAwait()
console.log("//----------FIN FS con Async / Await----------//")