//type: module
import services from "./api.services.js"
//modulo
import http from "http"
import fs from "fs"

let dataApi;

//Promesas
// function getDataPromises() {
//     services.apiFetchPromises()
//         .then(data => console.log(data))
//         .then(data => dataApi = data)
// }

// getDataPromises()

//Async / Await
async function getDataAsyncAwait() {
    const data = await services.apiFetchAsyncAwait()
    dataApi = data
    return data
}

getDataAsyncAwait()

//Servidor HTTP
//request -> solicitud
//response -> respuesta
const server = http.createServer(async (req, res) => {
    const { method, url } = req

    console.log("method: ", method)

    if(url === "/" && method === "GET"){
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({
            message: "URL base"
        }))
    } else if (url === "/api" &&  method === "GET") {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: dataApi }))
    } else if (url === "/public" &&  method === "GET") {
        const data = await fs.promises.readFile("./public/index.html", "utf-8")
        res.writeHead(400, { 'Content-Type': 'text/html' })
        res.end(data)
    } else {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: dataApi }))
    }

})

//asignación de puertos en backend -> 8000 en adelante hasta 9000
server.listen(8080, () => console.log("Server running..."))