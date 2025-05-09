import express from "express"
import studentRoutes from "./routes/student.route.js"

const app = express()
const PORT = 8080

//middlewares
app.use(express.json())
//sirve para realizar el envio o recibir información a traves de un formulario
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

// app.use("/", (req, res) => {
//     res.send("Bienvenidos!!!")
// })

// app.get("/", (req, res) => {
//     res.send(`
//         <form action="/" method="POST">
//             <label for="name">Nombre</label>
//             <input name="name" type="text"></input>
//             <button type="submit">Enviar</button>
//         </form>
//     `);
// })

// app.post("/", (req, res) => {
//     const name = req.body.name
//     res.send(name)
// })

app.use("/", studentRoutes)

//servidor running
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))