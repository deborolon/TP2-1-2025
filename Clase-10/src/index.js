import express from "express"
import Router from "./routes/animals.route.js"
import dotenv from "dotenv"

//ESto me permite trabajar con variables de entorno
dotenv.config()

const app = express()
const PORT = process.env.PORT

//Middleware Json: sirve para enviar datos json y/o convertirlos desde el servidor
//Fundamental para operaciones: POST, PATCH, PUT
app.use(express.json())
//Middleware UrlEncoded: recibir y enviar info desde un formulario
app.use(express.urlencoded({extended: true}))

app.use("/", new Router().start())
//Catch all
app.use((req, res) => {
    // res.send("Error. No autorizado.")
    res.status(404).json({
        code: 404,
        message: "Recurso no encontrado."
    })
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))


//Hoisting -> se puede invocar/ejecutar una función antes de que sea declarada
// saludar()

// function saludar(name) {
//     console.log("Hola " + name)
// }