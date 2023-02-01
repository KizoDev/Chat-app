const joi = require('@hapi/joi')


// register validation
const signupValidation = (data) => {
    const schema = {
    name:joi.string(),//.reguired(),
    email:joi.string().required(),
    password: joi.string().required()
    }
    return joi.validate(data, schema)
    
}
//login vallidation 
const signinValidation = (data) => {
    const schema = {
    email:joi.string().required(),
    password: joi.string().required()
    }
    return joi.validate(data, schema)
    
}


module.exports.signupValidation = signupValidation
module.exports.signinValidation = signinValidation
