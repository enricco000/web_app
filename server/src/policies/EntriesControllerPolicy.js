const Joi = require('joi')

module.exports = {
    post (req, res, next) {
        const schema = {
            title: Joi.string().required(),
            content: Joi.string().required(),
            author: Joi.string().required(),
            subTitle: Joi.string().allow('').allow(null),
            topics: Joi.string().allow('').allow(null),
            image: Joi.string().allow('').allow(null),
            youtubeId: Joi.string().allow('').allow(null),

        }
        const {error} = Joi.validate(req.body, schema)
        if (error) {
            switch (error.details[0].context.key) {
                case 'title':
                    res.status(400).send({
                        error: 'Entry must contain a title'
                    })
                    break
                case 'content':
                    res.status(400).send({
                        error: 'Entry must have content'
                    })
                    break
                case 'author':
                    res.status(400).send({
                        error: 'Entry requires a valid author and you\'re not logged in. How are you even here?'
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid entry creation'
                    })
            }
        } else {
        next()
        }
    }
}
