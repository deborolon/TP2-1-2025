import AnimalsController from "../controllers/animals.controller.js"
import express from "express"
// import { Router } from "express"

class Router {
    constructor() {
        this.controller = new AnimalsController()
        this.router = express.Router()
    }

    start(){
        //this.router + verbo + ("/ruta", this.controlador)
        //esto no se puede ejecutar como funcion, solo tiene que retornar valores cuando el usuario/vista/cliente pise la ruta
        this.router.get("/animals", this.controller.getAnimals)
        this.router.post("/animals", this.controller.postAnimals)
        this.router.delete("/delete/:id", this.controller.deleteAnimals)

        //sin este return no funciona
        return this.router
    }
}

export default Router