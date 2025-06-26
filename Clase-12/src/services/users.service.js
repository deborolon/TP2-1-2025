import validation from "../utils/validation.js"
import Factory from "../models/Factory.js"

class UsersService {
    constructor() {
        this.model = Factory.get(process.env.PERSISTENCE)
    }

    getUsers = async () => {
        const allUsers = await this.model.getUsers()
        return allUsers
    }

    postUsers = async (user) => {
        const validateUser = validation.schema.validate(user)
        if(validateUser.error){
            return "Error: " + validateUser.error
        }else {
            const postUsers = await this.model.postUsers(user)
            return postUsers
        }
    }

    putUsers = async (id, data) => {
        const putUsers = await this.model.putUsers(id, data)
        return putUsers
    }

    patchUsers = async (id, data) => {
        const patchUsers = await this.model.patchUsers(id, data)
        return patchUsers
    }

    deleteUsers = async (id) => {
        const deleteUsers = await this.model.deleteUsers(id)
        return deleteUsers
    }
    

}

export default UsersService