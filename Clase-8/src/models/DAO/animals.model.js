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

}

export default AnimalsModelMemory