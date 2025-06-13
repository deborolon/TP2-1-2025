import { MongoClient } from "mongodb"

class MongoConnection {
    
    static client = new MongoClient("mongodb://127.0.0.1")
    //tener específico cuidado con la declaración del nombre, tiene ser exacto!
    static db = this.client.db("tp2")

    static connection = async () => {
        await this.client.connect()
    }
}

export default MongoConnection