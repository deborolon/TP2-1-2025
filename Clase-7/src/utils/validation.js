import Joi from "joi"

const schema = Joi.object({
    id: Joi.number().integer().min(0),
    name: Joi.string().min(2).max(30)
})

export default {
    schema
}