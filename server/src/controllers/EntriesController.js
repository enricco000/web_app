const {Entry} = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const entries = await Entry.findAll({
                limit: 10
            })
            res.send(entries)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while fetching posts'
            })
        }
    },
    async post (req, res) {
        try {
            const entry = await Entry.create(req.body)
            const entryJSON = entry.toJSON()
            res.send(entryJSON)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while creating post'
            })
        }
    },
    async show (req, res) {
        try {
            const post = await Entry.findByPk(req.params.postId) // find by primary key
            res.send(post)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while fetching post'
            })
        }
    }
}
