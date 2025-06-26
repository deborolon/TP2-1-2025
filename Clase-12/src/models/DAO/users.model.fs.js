import fs from "fs"

class UsersModelFS {
    constructor() {
        this.path = "users.txt"
    }

    getUsers = async () => {
        const allUsers = await fs.promises.readFile(this.path, "utf8")
        return JSON.parse(allUsers)
    }

    postUsers = async (user) => {
        const users = await this.getUsers()
        user.id = users.length <= 0 ? user.id = 1 : users[users.length -1].id + 1
        users.push(user)
        await fs.promises.writeFile(this.path, JSON.stringify(users), "utf-8")
        return user
    }

    putUsers = async (id, update) => {
        const users = await this.getUsers()
        const index = users.findIndex((e) => e.id == id)
        if(index >= 0){
            update.id = Number(id)
            users.splice(index, 1, update)
            await fs.promises.writeFile(this.path, JSON.stringify(users), "utf-8")
            return update
        } else{
            return "Ocurrió un error al realizar la operación PUT."
        }
    }

    patchUsers = async (id, update) => {
        const users = await this.getUsers()
        const index = users.findIndex((e) => e.id == id)
        if(index >= 0){
            const newUser = {...users[index], ...update, id: Number(id)}
            users.splice(index, 1, newUser)
            await fs.promises.writeFile(this.path, JSON.stringify(users), "utf-8")
            return newUser
        } else{
            return "Ocurrió un error al realizar la operación PATCH."
        }
    }

    deleteUsers = async (id) => {
        const users = await this.getUsers()
        const index = users.findIndex((e) => e.id == id)
        if(index >= 0){
            users.splice(index, 1)
            fs.promises.writeFile(this.path, JSON.stringify(users), "utf-8")
            return "El elemento fue borrado."
        } else{
            return "Ocurrió un error."
        }
    }

}

export default UsersModelFS