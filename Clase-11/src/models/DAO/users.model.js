class UsersModelMemory {
    constructor() {
        this.users = [
            {id: 1, name: "Julieta Ojeda", email: "ju.ojeda@gmail.com"},
            {id: 2, name: "Juan Perez", email: "ju.perez@gmail.com"},
            {id: 3, name: "Giuliana Perez", email: "giu.perez@gmail.com"}
        ]
    }

    getUsers = async () => {
        const allUsers = await this.users
        return allUsers
    }

    postUsers = async (user) => {
        const users = await this.getUsers()
        user.id = users.length <= 0 ? user.id = 1 : users[users.length -1].id + 1
        users.push(user)
        return user
    }

    putUsers = async (id, update) => {
        const users = await this.getUsers()
        const index = users.findIndex((e) => e.id == id)
        if(index >= 0){
            update.id = Number(id)
            users.splice(index, 1, update)
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
            return "El elemento fue borrado."
        } else{
            return "Ocurrió un error."
        }
    }
}

export default UsersModelMemory