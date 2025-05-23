import fs from "fs"

//DAO -> Data Access Object - Objeto de Acceso a Datos
//conexión a la base de datos, APIs, librerías y/o dependencias propias del proyecto, etc

class AnimalsModelFS {
    constructor() {
        this.path = "animals.txt"
    }

    getAnimals = async () => {
        const allAnimals = await fs.promises.readFile(this.path, "utf8")
        return JSON.parse(allAnimals)
    }

    postAnimals = async (animal) => {
        const animals = await this.getAnimals()
        //verificar si tiene o no id
        //generar que el id sea incremental
        // if(animals.length <= 0){
        //     animal.id = 1
        // } else{
        //     animal.id = animals[animals.length -1].id + 1
        // }
        animal.id = animals.length <= 0 ? animal.id = 1 : animals[animals.length -1].id + 1
        console.log()
        animals.push(animal)
        await fs.promises.writeFile(this.path, JSON.stringify(animals), "utf-8")
        return animal
    }

    putAnimals = async (id, update) => {
        const animals = await this.getAnimals()
        const index = animals.findIndex((e) => e.id == id)
        if(index >= 0){
            update.id = Number(id)
            animals.splice(index, 1, update)
            await fs.promises.writeFile(this.path, JSON.stringify(animals), "utf-8")
            return update
        } else{
            return "Ocurrió un error al realizar la operación PUT."
        }
    }

    patchAnimals = async (id, update) => {
        const animals = await this.getAnimals()
        const index = animals.findIndex((e) => e.id == id)
        if(index >= 0){
            //Desestructuración de objetos + spread operator
            const newAnimal = {...animals[index], ...update, id: Number(id)}
            animals.splice(index, 1, newAnimal)
            await fs.promises.writeFile(this.path, JSON.stringify(animals), "utf-8")
            return newAnimal
        } else{
            return "Ocurrió un error al realizar la operación PATCH."
        }
    }

    deleteAnimals = async (id) => {
        const animals = await this.getAnimals()
        const index = animals.findIndex((e) => e.id == id)
        if(index >= 0){
            animals.splice(index, 1)
            fs.promises.writeFile(this.path, JSON.stringify(animals), "utf-8")
            return "El elemento fue borrado."
        } else{
            return "Ocurrió un error."
        }
    }

}

export default AnimalsModelFS