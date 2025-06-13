import MongoConnection from "../MongoConnection.js"

class AnimalsModelMongo {
    constructor() {
        this.db = MongoConnection.db
    }

    getAnimals = async () => {
        const animals = await this.db.collection("animals").find({}).toArray()
        return animals
    }
    
    postAnimals = async (animal) => {
        const newAnimal = await this.db.collection("animals").insertOne(animal)
        return animal
    }

    putAnimals = async (id, update) => {

    }

    patchAnimals = async (id, update) => {

    }

    deleteAnimals = async (id) => {

    }
}

export default AnimalsModelMongo