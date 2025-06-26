import UsersService from "../services/users.service.js"
import authMiddleware from "../middlewares/auth.js"

class UsersController {
    constructor() {
        this.service = new UsersService()
    }

    login = async (req, res) => {
        const data = req.headers
        const generateTkn = await authMiddleware.generateToken(data)
        res.send(generateTkn)
    }

    getUsers = async (req, res) => {
        const allusers = await this.service.getUsers()
        res.send(allusers)
    }

    postUsers = async (req, res) => {
        const user = req.body
        const postusers = await this.service.postUsers(user)
        res.send(postusers)
    }

    putUsers = async (req, res) => {
        const { id } = req.params
        const data = req.body
        const putUsers = await this.service.putUsers(id, data)
        res.send(putUsers)
    }

    patchUsers = async (req, res) => {
        const { id } = req.params
        const data = req.body
        const patchUsers = await this.service.patchUsers(id, data)
        res.send(patchUsers)
    }

    deleteUsers = async (req, res) => {
        const { id } = req.params
        const deleteUsers = await this.service.deleteUsers(id)
        res.send(deleteUsers)
    }

}

export default UsersController