import animalsModelMem from "../models/DAO/animals.model.js"
import animalsModelFS from "../models/DAO/animals.model.fs.js"

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
                console.log("Pensistiendo en la memoria del servidor...")
                return new animalsModelMem()

            // case "mongo":
            //     console.log("Pensistiendo en la MongoDB...")
            //     return new animalsModelMongo()
        
            default:
                console.log("Pensistiendo en memoria default...")
                return new animalsModelMem()
        }
    }
}

export default Factory