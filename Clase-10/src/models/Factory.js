import animalsModelMem from "../models/DAO/animals.model.js"
import animalsModelFS from "../models/DAO/animals.model.fs.js"
import animalsModelMongo from "./DAO/animals.model.mongo.js"

//Factory -> patrón de diseño que lo que busca es retornar directamente algo
//sin necesidad de instanciarlo, ni saber cómo se comporta

//static -> sirve para no generar instancias

class Factory {
    static get(persistence){
        switch (persistence) {
            case "fs":
                console.log("Pensistiendo en File System...")
                return new animalsModelFS()

            case "memory":
                console.log("Persistiendo en la memoria del servidor...")
                return new animalsModelMem()

            case "mongo":
                console.log("Persistiendo en MongoDB...")
                return new animalsModelMongo()
        
            default:
                console.log("Persistiendo en memoria default...")
                return new animalsModelMem()
        }
    }
}

export default Factory