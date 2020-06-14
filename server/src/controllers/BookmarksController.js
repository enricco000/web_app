const {Bookmark} = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const {entryId, userId} = req.query
                const bookmark = await Bookmark.findOne({
                    where: {
                        EntryId: entryId,
                        UserId: userId
                    }
                })
            if (bookmark) {
                res.send(true)
            } else {
                res.send(false)
            }
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured while fetching bookmark'
            })
        }
    }
}
