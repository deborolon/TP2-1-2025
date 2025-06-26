import Joi from "joi"

const schema = Joi.object({
    name: Joi.string().min(2).max(30).required(),
    edad: Joi.number().min(18).max(100),
    email: Joi.string(),
})

export default {
    schema
}