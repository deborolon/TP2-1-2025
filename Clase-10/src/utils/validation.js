import Joi from "joi"

const schema = Joi.object({
    name: Joi.string().min(2).max(30).required()
})

export default {
    schema
}