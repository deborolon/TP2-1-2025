import UsersController from "../controllers/users.controller.js"
import express from "express"
import authMiddleware from "../middlewares/auth.js"

class Router {
    constructor() {
        this.controller = new UsersController()
        this.router = express.Router()
    }

    start(){
        //Login -> el login siempre es un POST
        this.router.post("/login", this.controller.login)
        //de esta forma se utiliza un middleware para validar que el token no haya expirado y que las credenciales sean válidas
        this.router.get("/users", authMiddleware.verifyToken, this.controller.getUsers)

        this.router.post("/users", this.controller.postUsers)
        this.router.put("/users/update/all/:id", this.controller.putUsers)
        this.router.patch("/users/update/:id", this.controller.patchUsers)
        this.router.delete("/delete/:id", this.controller.deleteUsers)

        return this.router
    }
}

export default Router