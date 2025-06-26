import usersModelMem from "./DAO/users.model.js"
import usersModelFS from "./DAO/users.model.fs.js"
import usersModelMongo from "./DAO/users.model.mongo.js"

class Factory {
    static get(persistence){
        switch (persistence) {
            case "fs":
                console.log("Pensistiendo en File System...")
                return new usersModelFS()

            case "memory":
                console.log("Persistiendo en la memoria del servidor...")
                return new usersModelMem()

            case "mongo":
                console.log("Persistiendo en MongoDB...")
                return new usersModelMongo()
        
            default:
                console.log("Persistiendo en memoria default...")
                return new usersModelMem()
        }
    }
}

export default Factory