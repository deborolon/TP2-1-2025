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
        const postAnimals = await this.service.postAnimals(animal)
        res.send(postAnimals)
    }

    putAnimals = async (req, res) => {
        const { id } = req.params
        const update = req.body
        const putAnimals = await this.service.putAnimals(id, update)
        return putAnimals
    }

    patchAnimals = async (req, res) => {
        const { id } = req.params
        const update = req.body
        const patchAnimals = await this.service.patchAnimals(id, update)
        return patchAnimals
    }

    deleteAnimals = async (req, res) => {
        const { id } = req.params
        const deleteAnimals = await this.service.deleteAnimals(id)
        res.send(deleteAnimals)
    }
}

export default AnimalsController