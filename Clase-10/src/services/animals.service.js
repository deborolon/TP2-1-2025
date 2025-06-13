import validation from "../utils/validation.js"
// import { schema } from "../utils/validation.js"
import Factory from "../models/Factory.js"

class AnimalsService {
    constructor() {
        // this.model = new AnimalsModelMemory()
        // this.model = new AnimalsModelFS()
        this.model = Factory.get(process.env.PERSISTENCE)
    }

    getAnimals = async () => {
        const allAnimals = await this.model.getAnimals()
        return allAnimals
    }

    postAnimals = async (animal) => {
        const validateAnimal = validation.schema.validate(animal)
        if(validateAnimal.error){
            return "Error: " + validateAnimal.error
        }else {
            const postAnimals = await this.model.postAnimals(animal)
            return postAnimals
        }
    }

    putAnimals = async (id, update) => {
        const putAnimals = await this.model.putAnimals(id, update)
        return putAnimals
    }

    patchAnimals = async (id, update) => {
        const patchAnimals = await this.model.patchAnimals(id, update)
        return patchAnimals
    }

    deleteAnimals = async (id) => {
        const deleteAnimals = await this.model.deleteAnimals(id)
        return deleteAnimals
    }
}

export default AnimalsService