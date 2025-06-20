import { MongoClient } from "mongodb"

class MongoConnection {
    
    //base de datos local
    // static client = new MongoClient("mongodb://127.0.0.1")
    // static db = this.client.db("tp2")

    //base de datos en la nube (MongoDB Atlas)
    static client = new MongoClient("mongodb+srv://<tu_usuario>:<tu_clave>@clustertest.yjhytvq.mongodb.net/?retryWrites=true&w=majority&appName=<tu_cluster>")
    static db = this.client.db("tp2")

    static connection = async () => {
       await this.client.connect()
    }
}

export default MongoConnection