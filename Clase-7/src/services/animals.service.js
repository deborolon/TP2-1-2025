import AnimalsModelMemory from "../models/animals.model.js"
import AnimalsModelFS from "../models/animals.model.fs.js"
import validation from "../utils/validation.js"
// import { schema } from "../utils/validation.js"

class AnimalsService {
    constructor() {
        // this.model = new AnimalsModelMemory()
        this.model = new AnimalsModelFS()
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

    deleteAnimals = async (id) => {
        const deleteAnimals = await this.model.deleteAnimals(id)
        return deleteAnimals
    }
}

export default AnimalsService