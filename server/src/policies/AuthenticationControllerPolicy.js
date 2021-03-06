const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = {
            username: Joi.string().alphanum().min(8).max(30),
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }
        const {error} = Joi.validate(req.body, schema)
        if (error) {
            switch (error.details[0].context.key) {
                case 'username':
                    res.status(400).send({
                        error: 'Username must contain only alphanumeric characters and must be 8 - 32 characters long'
                    })
                    break
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `
                        The password provided failed to match the following rules:
                        <br>
                        1. It must contain only lower caser, upper case, numerics
                        <br>
                        2. It must be at 8 to 32 charactters long
                        `
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid registration information'
                    })
            }
        } else {
        next()
        }
    }
}
