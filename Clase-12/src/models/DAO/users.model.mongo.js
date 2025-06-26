import MongoConnection from "../MongoConnection.js"
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

    putUsers = async (id, data) => {
        const update = await this.db.collection("users").replaceOne(
            {_id: ObjectId.createFromHexString(id)}, data
        )
        return update
    }

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