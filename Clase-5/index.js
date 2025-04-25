//forma de importar "commonjs"""
// const express = require("express")
//forma de importación "module" -> tengo que añadir "type": "module" en el package.json después del main
import express from "express"
//npm i o npm install -> npm install nombreDeLaDependencia
//npm i sirve para instalar cosas externas a node o reinstalar dependencias desde un package.json ya configurado
const server = express()
const PORT = 8080
//Middleware -> función intermedia que opera entre el req y el res
server.use(express.json())

//Endpoints -> punto de entrada
//Verbos: GET, POST, PUT, PATCH, DELETE
const films = [
    {id: 1, nombre: "The last of us", temporadas: 2, año: 2025},
    {id: 2, nombre: "El padrino", temporadas: 3, año: 1972},
    {id: 3, nombre: "Jurassic Park", temporadas: 6, año: 1993}
]

server.get("/", (req, res) => {
    res.send("Ruta base.")
})

server.get("/films", (req, res) => {
    res.send(films)
})

server.get("/films/:id", (req, res) => {
    const { id } = req.params
    const element = films.find((e) => e.id == id)
    if(!element) res.send("No se encuentra el elemento.")
    res.send(element)
})

server.post("/films", (req, res) => {
    const newFilm = req.body
    films.push(newFilm)
    res.send(newFilm)
})

//PUT -> actualización total
server.put("/update/all/:id", (req, res) => {
    const { id } = req.params
    const data = req.body
    //Todo lo que viaje por params es un string por eso "=="
    const index = films.findIndex((e) => e.id == id)
    films.splice(index, 1, data)
    res.send(data)

    //Otra forma
    // const { id } = req.params
    // const { nombre, temporadas, año } = req.body
    // const movie = films.find((e) => e.id == id)
    
    // if(!movie){
    //     res.send("No se encuentra la pelicula.")
    // } else{
    //     movie.nombre = nombre
    //     movie.temporadas = temporadas
    //     movie.año = año
    //     res.send(movie)
    // }
})

//PATCH -> reemplazo parcial
server.patch("/update/:id", (req, res) => {
    const { id } = req.params
    const data = req.body
    const index = films.findIndex((e) => e.id == id)
    //Spread Operator ...
    //Desestructuring object { }
    const newFilm = {...films[index], ...data}
    //de acuerdo a como se ubiquen las variables puede dar distintos resultados
    // const newFilm = {...data, ...films[index]}
    films.splice(index, 1, newFilm)
    res.send(newFilm)
})

server.delete("/delete/:id", (req, res) => {
    const { id } = req.params
    const index = films.findIndex((e) => e.id == id)
    if(index >= 0){
        films.splice(index, 1)
        res.send("El elemento fue borrado exitosamente.")
    } else{
        res.send("El id no existe.")
    }
})

server.listen(PORT, () => console.log(`Server running on ${PORT}...`))