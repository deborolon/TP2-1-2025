import AnimalsService from "../services/animals.service.js"

class AnimalsController {
    constructor() {
        this.service = new AnimalsService()
    }

    getAnimals = async (req, res) => {
        const allAnimals = await this.service.getAnimals()
        res.send(allAnimals)
    }

    postAnimals = async (req, res) => {
        const animal = req.body
        if(Object.keys(animal).includes("name") && Object.keys(animal).includes("id")){
            const postAnimals = await this.service.postAnimals(animal)
            res.send(postAnimals)
        } else{
            res.send("No se proporcionaron los datos correctos.")
        }
    }

    deleteAnimals = async (req, res) => {
        const { id } = req.params
        const deleteAnimals = await this.service.deleteAnimals(id)
        res.send(deleteAnimals)
    }
}

export default AnimalsController