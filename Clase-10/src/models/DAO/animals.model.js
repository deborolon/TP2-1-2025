class AnimalsModelMemory {
    constructor() {
        this.animals = [
            {id: 1, name: "Elefante"},
            {id: 2, name: "Zarigueya"},
            {id: 3, name: "Marmota"}
        ]
    }

    getAnimals = async () => {
        const allAnimals = await this.animals
        return allAnimals
    }

    postAnimals = async (animal) => {
        const animals = await this.getAnimals()
        animal.id = animals.length <= 0 ? animal.id = 1 : animals[animals.length -1].id + 1
        animals.push(animal)
        return animal
    }

    putAnimals = async (id, update) => {
        const animals = await this.getAnimals()
        const index = animals.findIndex((e) => e.id == id)
        if(index >= 0){
            update.id = Number(id)
            animals.splice(index, 1, update)
            return update
        } else{
            return "Ocurrió un error al realizar la operación PUT."
        }
    }

    patchAnimals = async (id, update) => {
        const animals = await this.getAnimals()
        const index = animals.findIndex((e) => e.id == id)
        if(index >= 0){
            const newAnimal = {...animals[index], ...update, id: Number(id)}
            animals.splice(index, 1, newAnimal)
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
            return "El elemento fue borrado."
        } else{
            return "Ocurrió un error."
        }
    }
}

export default AnimalsModelMemory