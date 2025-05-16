import fs from "fs"

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
        animals.push(animal)
        await fs.promises.writeFile(this.path, JSON.stringify(animals), "utf-8")
        return animal
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