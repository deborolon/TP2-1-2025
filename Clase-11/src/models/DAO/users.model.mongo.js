import MongoConnection from "../MongoConnection.js"
//Esto me sirve para trabajar con el objeto de id de MongoDB
import { ObjectId } from "mongodb"

class UsersModelMongo {
    constructor() {
        this.db = MongoConnection.db
    }

    getUsers = async () => {
        const users = await this.db.collection("users").find({}).toArray()
        return users
    }
    
    postUsers = async (user) => {
        const newUser = await this.db.collection("users").insertOne(user)
        return newUser
    }
    //Actualización total del objeto
    putUsers = async (id, data) => {
        //createFromHexString -> convierte un string (el que viene por req.params) en un objeto de MongoDB
        const update = await this.db.collection("users").replaceOne(
            {_id: ObjectId.createFromHexString(id)}, data
        )
        return update
    }
    //Actualización parcial
    //updateOne actualiza el campo si existe, si no crea uno nuevo
    patchUsers = async (id, data) => {
        const update = await this.db.collection("users").updateOne(
            {_id: ObjectId.createFromHexString(id)},
            {$set: data}
        )
        return update
    }

    deleteUsers = async (id) => {
        const usrDelete = await this.db.collection("users").deleteOne(
            {_id: ObjectId.createFromHexString(id)}
        )
        return usrDelete
    }

}

export default UsersModelMongo